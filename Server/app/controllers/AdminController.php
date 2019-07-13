<?php

namespace app\controllers;

use app\core as core;
use app\libs\validator as validator;

class AdminController extends core\Controller
{
    function __construct($class)
    {
        $modelNameSpc = 'app\models\\UsersModel';
        $viewNameSpc = 'app\api\admin\\' . $class;

        $this->model = new $modelNameSpc;
        $this->view = new $viewNameSpc;
        $this->validator = new validator\Validator;
    }

    public function getAction($input)
    {
        $request = $this->parseGetData($input);
        
        $id = $request[0];
        $token = $request[1];
        $reqUserId = $request[2];

        $checker = $this->model->checkAdmin($id, $token);

        if ($checker['status'] == 'success')
        {
            if ($reqUserId)
            {
                $result = $this->model->getUserById($reqUserId);
            } else {
                $result = $this->model->getAllUsers();
            }
        } else {
            $result = $checker;
        }

        $this->view->getAdmin($result);
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