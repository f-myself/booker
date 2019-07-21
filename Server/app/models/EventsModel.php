<?php

namespace app\models;

use app\core as core;
use app\libs\PDOHandler as pdo;

class EventsModel extends core\Model
{
    /**
     *   
     *  Events model
     *  get different operations with events
     *  Works with controllers: Event
     *  Operations: getAllEvents, createEvent
     * 
    **/

    function __construct()
    {
        $this->sql = new pdo\PDOHandler;
    }

    public function getAllEvents($room, $year, $month)
    {
        $events = $this->sql->newQuery()->select(['b.id', 'user_id', 'u.name', 'boardroom_id', 'description', 'UNIX_TIMESTAMP(datetime_start) as startEvent', 'UNIX_TIMESTAMP(datetime_end) as endEvent', 'UNIX_TIMESTAMP(datetime_created) as createdEvent', 'booking_id as parent'])
                                        ->from('b_bookings b')
                                        ->join('b_users u', 'b.user_id=u.id')
                                        ->where("boardroom_id='$room'")
                                        ->l_and("YEAR(datetime_start)='$year'")
                                        ->l_and("MONTH(datetime_start)='$month'")
                                        ->doQuery();
        if ($events)
        {
            $result = ['data' => $events, 'status' => 'success'];
            return $result;
        } else {
            return ['status' => 'error'];
        }
    }

    public function getEventById($id)
    {
        $events = $this->sql->newQuery()->select(['b.id', 'user_id', 'u.name', 'boardroom_id', 'description', 'UNIX_TIMESTAMP(datetime_start) as startEvent', 'UNIX_TIMESTAMP(datetime_end) as endEvent', 'UNIX_TIMESTAMP(datetime_created) as createdEvent', 'booking_id as parent'])
                                       ->from('b_bookings b')
                                       ->join('b_users u', 'b.user_id=u.id')
                                       ->where('b.id=' . $id)
                                       ->l_or("b.booking_id=" . $id)
                                       ->doQuery();
        if ($events)
        {
            return ['data' => $events, 'status' => 'success'];
        }
        return ['status' => 'err_no_event'];
    }

    public function createEvent($userId, $boardroomId, $description, $dateStart, $dateEnd, $dateCreated, $recurring=false, $duration=false)
    {
        $start = date("Y-m-d G:i:s", $dateStart);
        $end = date("Y-m-d G:i:s", $dateEnd);
        $created = date("Y-m-d G:i:s", $dateCreated);

        if(!$this->checkTimeEvent($dateStart, $dateEnd, $boardroomId))
        {
            return ["status" => "err_time"];
        }

        if ($this->checkHolidays($dateStart))
        {
            $result = $this->sql->newQuery()->insert('b_bookings', ['user_id', 'boardroom_id', 'description', 'datetime_start', 'datetime_end', 'datetime_created'], "'$userId', '$boardroomId', '$description', '$start', '$end', '$created'")->doQuery();
        } else {
            return ['status' => 'err_holiday'];
        }

        if ($recurring)
        {
            $eventId = $this->sql->newQuery()->select('id')
                                             ->from('b_bookings')
                                             ->order('id')
                                             ->limit(1, true)
                                             ->doQuery();
            $lastEventId = $eventId[0]['id'];
        }

        if($recurring == "weekly" and $result)
        {
            for($i = 1; $i <= $duration; $i++)
            {
                $repeatStartTime = strtotime("$start + $i week");
                $repeatEndTime = strtotime("$end + $i week");
                $repeatStartDate = date("Y-m-d G:i:s", $repeatStartTime);
                $repeatEndDate = date("Y-m-d G:i:s", $repeatEndTime);

                if($this->checkTimeEvent($repeatStartTime, $repeatEndTime, $boardroomId))
                {
                    $this->sql->newQuery()->insert('b_bookings', ['user_id', 'boardroom_id', 'description', 'datetime_start', 'datetime_end', 'booking_id', 'datetime_created'], "'$userId', '$boardroomId', '$description', '$repeatStartDate', '$repeatEndDate', '$lastEventId', '$created'")->doQuery();
                } else {
                    return ["status" => "succ_with_errors"];
                }
                // examples: 
                // echo date("Y-m-d G:i:s", strtotime("$start + $i month" )) . "\n";
                // echo date("Y-m-d G:i:s", strtotime("$end + $i week" )) . "\n";
            }
        }

        if($recurring == "bi-weekly" and $result)
        {
            for($i = 1; $i <= $duration; $i++)
            {
                $repeatStartTime = strtotime("$start + " . ($i * 2) . " week");
                $repeatEndTime = strtotime("$end + " . ($i * 2) . " week");
                $repeatStartDate = date("Y-m-d G:i:s", $repeatStartTime);
                $repeatEndDate = date("Y-m-d G:i:s", $repeatEndTime);
                if($this->checkTimeEvent($repeatStartTime, $repeatEndTime, $boardroomId))
                {
                    $this->sql->newQuery()->insert('b_bookings', ['user_id', 'boardroom_id', 'description', 'datetime_start', 'datetime_end', 'booking_id', 'datetime_created'], "'$userId', '$boardroomId', '$description', '$repeatStartDate', '$repeatEndDate', '$lastEventId', '$created'")->doQuery();
                } else {
                    return ["status" => "succ_with_errors"];
                }
            }
        }

        if($recurring == "monthly" and $result)
        {
            
            $repeatStartTime = strtotime("$start + 1 month");

            while(!$this->checkHolidays($repeatStartTime))
            {
                $repeatStartTime = strtotime(" + 1 day", $repeatStartTime);
            }
            $repeatStartDate = date("Y-m-d G:i:s", $repeatStartTime);

            /***********************/

            $repeatEndTime = strtotime("$end + 1 month");
            
            while(!$this->checkHolidays($repeatEndTime))
            {
                $repeatEndTime = strtotime(" + 1 day", $repeatEndTime);
            }
            $repeatEndDate = date("Y-m-d G:i:s", $repeatEndTime);

            /***********************/
            if($this->checkTimeEvent($repeatStartTime, $repeatEndTime, $boardroomId))
            {
                $this->sql->newQuery()->insert('b_bookings', ['user_id', 'boardroom_id', 'description', 'datetime_start', 'datetime_end', 'booking_id', 'datetime_created'], "'$userId', '$boardroomId', '$description', '$repeatStartDate', '$repeatEndDate', '$lastEventId', '$created'")->doQuery();
                // echo $this->sql->getQuery();
            } else {
                return ["status" => "succ_with_errors"];
            }
        }

        if ($result)
        {
            return ["status" => 'success'];
        }

        return ["status" => 'error'];
    }

    public function updateEvent($eventId, $boardroomId, $parent, $userFor, $dateStart, $dateEnd, $description, $recFlag)
    {
        // Todo: updateEvent

        // echo "event: $eventId \n";
        // echo "room: $boardroomId \n";
        // echo "parent: $parent \n";
        // echo "user: $userFor \n";
        // echo "start: $dateStart \n";
        // echo "dateEnd: $dateEnd \n";
        // echo "description: $description \n";
        // echo "recFlag: $recFlag \n";
        $start = date("Y-m-d G:i:s", $dateStart);
        $end = date("Y-m-d G:i:s", $dateEnd);

        if ($recFlag == false)
        {
            if(!$this->checkTimeEvent($dateStart, $dateEnd, $boardroomId, $eventId))
            {
                return ["status" => "err_time"];
            }

            $result = $this->sql->newQuery()->update("b_bookings", ["user_id", "description", "datetime_start", "datetime_end"], ["'$userFor'", "'$description'", "'$start'", "'$end'"], "id='$eventId'")->doQuery();

            if ($result)
            {
                return ["status" => "success"];
            }

        } else {
                // echo "multiple";
                // return ['status' => 'disbled'];
                $startTime = date("G:i:s", $dateStart);
                $endTime = date("G:i:s", $dateEnd);

                if($parent != 'null')
                {
                    $events = $this->sql->newQuery()->select(["id", "datetime_start", "datetime_end"])
                                                    ->from("b_bookings")
                                                    ->where("id=" . $parent)
                                                    ->l_or("booking_id=" . $parent)
                                                    ->doQuery();
                } else {
                    $events = $this->sql->newQuery()->select(["id", "datetime_start", "datetime_end"])
                                                    ->from("b_bookings")
                                                    ->where("id=" . $eventId)
                                                    ->l_or("booking_id=" . $eventId)
                                                    ->doQuery();
                }

                $newDates = [];

                foreach($events as $key => $event)
                {
                    $newDates[$key]['id'] = $event['id'];

                    $startDate = explode(" ", $event["datetime_start"]);
                    $newDates[$key]['start'] = $startDate[0] . " " . $startTime;

                    $endDate = explode(" ", $event["datetime_end"]);
                    $newDates[$key]["end"] = $endDate[0] . " " . $endTime;
                }

                foreach($newDates as $newEvent)
                {
                    if (!$this->checkTimeEvent(strtotime($newEvent["start"]), strtotime($newEvent["end"]), $boardroomId, $newEvent["id"]))
                    {
                        return ["status" => "err_time"];
                    }
                }

                foreach($newDates as $newEvent)
                {
                    $updateStart = $newEvent['start'];
                    $updateEnd = $newEvent['end'];
                    $id = $newEvent['id'];
                    $result = $this->sql->newQuery()->update("b_bookings", ["user_id", "description", "datetime_start", "datetime_end"], ["'$userFor'", "'$description'", "'$updateStart'", "'$updateEnd'"], "id='$id'")->doQuery();

                    if(!$result)
                    {
                        return ["status" => "succ_with_errors"];
                    }
                }
                return ["status" => "success"];
            }
        return["status" => "error"];
    }

    public function deleteEventById($eventId, $allEvents=false)
    {
        if ($allEvents)
        {
            $result = $this->sql->delete("b_bookings", "id='$eventId'")
                                ->l_or("booking_id='$eventId'")
                                ->doQuery();
        } else {
            $result = $this->sql->delete("b_bookings", "id='$eventId'")
                                ->doQuery();
        }

        if ($result)
        {
            return ["status" => "success"];
        }
        return ["status" => "error"];
    }

    public function deleteEventByUser($userId)
    {
        $result = $this->sql->delete("b_bookings", "user_id='$userId'")
                            ->doQuery();

        if ($result)
        {
            return ["status" => "success"];
        }
        return ["status" => "error"];
    }

    public function getRooms()
    {
        $rooms = $this->sql->select(['id', 'name'])
                         ->from('b_boardrooms')
                         ->doQuery();

        if ($rooms)
        {
            $result = ["status" => "success", "data" => $rooms];
            return $result;
        }
        return ["status" => "error"];
    }
    
    private function checkTimeEvent($timestampStart, $timestampEnd, $room, $id = false)
    {
        $day = date('Y-m-d', $timestampStart);

        if($id == false)
        {
            $result = $this->sql->newQuery()->select(["id", "UNIX_TIMESTAMP(datetime_start) as start", "UNIX_TIMESTAMP(datetime_end) as end"])
                                            ->from("b_bookings")
                                            ->where("DATE(datetime_start)='$day'")
                                            ->l_and("boardroom_id='$room'")
                                            ->doQuery();
        } else {
            $result = $this->sql->newQuery()->select(["id", "UNIX_TIMESTAMP(datetime_start) as start", "UNIX_TIMESTAMP(datetime_end) as end"])
                                            ->from("b_bookings")
                                            ->where("DATE(datetime_start)='$day'")
                                            ->l_and("boardroom_id='$room'")
                                            ->l_and("id !='$id'")
                                            ->doQuery();
        }

        if (count($result) > 0 and is_array($result))
        {
            foreach($result as $date)
            {
                if(!((int)$date['start'] < (int)$timestampStart && 
                    (int)$date['end'] <= (int)$timestampStart || 
                    (int)$date['start'] >= (int)$timestampEnd && 
                    (int)$date['end'] > (int)$timestampEnd))
                {
                return false;
                }
            }
        }
        return true;
    }

    private function checkHolidays($timestamp)
    {
        $day = date('N', $timestamp);
        return !((int)$day >= 6); 
    }
}
