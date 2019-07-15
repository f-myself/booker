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
        
    }

    public function putAction()
    {
        
    }

    public function deleteAction()
    {
        
    }
}