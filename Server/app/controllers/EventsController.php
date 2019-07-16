<?php

namespace app\controllers;

use app\core as core;
use app\libs\validator as validator;

class EventsController extends core\Controller
{
    function __construct($class)
    {
        $modelNameSpc = 'app\models\\EventsModel';
        $viewNameSpc = 'app\api\events\\' . $class;

        $this->model = new $modelNameSpc;
        $this->view = new $viewNameSpc;
        $this->validator = new validator\Validator;
    }

    public function getAction()
    {
        
    }

    public function postAction()
    {
        $request = $this->getPostData();

        $userId = $request['userForId'];
        $boardroomId = $request['boardroom'];
        $description = $request['description'];
        $dateStart = $request['dateStart'];
        $dateEnd = $request['dateEnd'];
        $dateCreated = $request['dateCreate'];
        $recurring = $request['recurring'];
        $duration = $request['duration'];

        if ($dateStart > $dateEnd)
        {
            return ["status" => "err_dates"];
        }

        $startTime = date("G", $dateStart);
        $endTime = date("G", $dateEnd);

        if ((int)$startTime < 8 or (int)$startTime > 20 or
            (int)$endTime < 8 or (int)$endTime > 20)
        {
            return ["status" => "err_hours"];
        }

        $startYear = date("Y", $dateStart);

        if ($startYear > 2020)
        {
            return ["status" => "err_future"];
        }

        if ($startYear < 2019)
        {
            return ["status" => "err_past"];
        }

        if (true === $this->validator->checkRule($userId, 'isInteger') and
            true === $this->validator->checkRule($boardroomId, 'isInteger') and
            true === $this->validator->checkRule($description, 'isStringText') and
            true === $this->validator->checkRule($dateStart, 'isInteger') and
            true === $this->validator->checkRule($dateEnd, 'isInteger') and
            true === $this->validator->checkRule($dateCreated, 'isInteger'))
        {
            $result = $this->model->createEvent($userId, $boardroomId, $description, $dateStart, $dateEnd, $dateCreated, $recurring, $duration);
            $this->view->postEvents($result);
        } else {
            return ["status" => "err_valid"];
        }
            

    }

    public function putAction()
    {
        
    }

    public function deleteAction()
    {
        
    }
}