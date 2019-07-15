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
        $dateStart = $request['dateStart']);
        $dateEnd = $request['dateEnd']);
        $dateCreated = $request['dateCreate']);
        $recurring = $request['recurring'];
        $duration = $request['duration'];

        if (true === $this->validator->checkRule($userId), 'isInteger') and
            true === $this->validator->checkRule($boardroomId), 'isInteger') and
            true === $this->validator->checkRule($description), 'isStringText') and
            true === $this->validator->checkRule($dateStart), 'isStringText') and
            true === $this->validator->checkRule($dateEnd), 'isStringText') and
            true === $this->validator->checkRule($dateCreated), 'isStringText') and
            true === $this->validator->checkRule($recurring), 'isText') and
            true === $this->validator->checkRule($duration), 'isInteger'))
        {
            $result = $this->model->createEvent($userId, $boardroomId, $description, $dateStart, $dateEnd, $dateCreated, $recurring, $duration)
        }
            

    }

    public function putAction()
    {
        
    }

    public function deleteAction()
    {
        
    }
}