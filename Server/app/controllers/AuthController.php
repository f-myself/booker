<?php

namespace app\controllers;

use app\core as core;
use app\libs\validator as validator;

class AuthController extends core\Controller
{
    function __construct($class)
    {
        $modelNameSpc = 'app\models\\AuthModel';
        $viewNameSpc = 'app\api\auth\\' . $class;

        $this->model = new $modelNameSpc;
        $this->view = new $viewNameSpc;
    }

    public function getAction()
    {
        
    }

    public function postAction($input)
    {
        $request = $this->getPostData();
    }

    public function putAction($input)
    {

    }

    public function deleteAction($input)
    {

    }
}