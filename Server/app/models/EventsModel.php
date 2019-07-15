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

    public function getAllEvents()
    {
        
    }

    public function createEvent($userId, $boardroomId, $description="", $dateStart, $dateEnd, $dateCreated, $recurring="", $duration="")
    {
        $start = date("Y-m-d G:i:s", $dateStart);
        $end = date("Y-m-d G:i:s", $dateEnd);
        $created = date("Y-m-d G:i:s", $dateCreated);

        if($recurring == "weekly")
        {
            $result = $this->sql->newQuery()->insert('b_bookings', ['user_id', 'boardroom_id', 'description', 'datetime_start', 'datetime_end', 'datetime_created'], "'$userId', '$boardroomId', '$description', '$start', '$end', '$created'"); // Перенести над рекуррентностью??

            $eventId = $this->sql->newQuery()->select('id')
                                             ->from('b_bookings')
                                             ->order('id')
                                             ->limit(1, true),
                                             ->doQuery();
            $lastEventId = $eventId[0];

            for($i = 1; $i <= $recurring; $i++)
            {
                $startRepeat = $dateStart + (WEEK_SECONDS * $i);
                $endRepeat = $dateEnd + (WEEK_SECONDS * $i);


            }

        }
    }
    
    private function checkHolidays($timestamp)
    {
        $day = date('N', $timestamp);
        return !((int)$day >= 6); 
    }

}
