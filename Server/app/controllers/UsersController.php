<?php

namespace app\controllers;

use app\core as core;
use app\libs\validator as validator;

class UsersController extends core\Controller
{
    function __construct($class)
    {
        $modelNameSpc = 'app\models\\UsersModel';
        $viewNameSpc = 'app\api\users\\' . $class;

        $this->model = new $modelNameSpc;
        $this->view = new $viewNameSpc;
        $this->validator = new validator\Validator;
    }

    public function getAction($input)
    {
        $request = $this->parseGetData($input);
        print_r($request);
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