<?php

namespace app\controllers;

use app\core as core;
use app\libs\validator as validator;

class RoomsController extends core\Controller
{
    function __construct($class)
    {
        $modelNameSpc = 'app\models\\EventsModel';
        $viewNameSpc = 'app\api\rooms\\' . $class;

        $this->model = new $modelNameSpc;
        $this->view = new $viewNameSpc;
        $this->validator = new validator\Validator;
    }

    public function getAction($input)
    {
        $data = $this->parseGetData($input);
        $result = $this->model->getRooms();
        $this->view->getRooms($result, $input);
    }

    public function postAction()
    {

    }

    public function putAction()
    {

    }

    public function deleteAction()
    {

    }
}