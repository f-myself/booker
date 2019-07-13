<?php

namespace app\controllers;

use app\core as core;
use app\libs\validator as validator;

class AuthController extends core\Controller
{
    private $validator;

    function __construct($class)
    {
        $modelNameSpc = 'app\models\\AuthModel';
        $viewNameSpc = 'app\api\auth\\' . $class;

        $this->model = new $modelNameSpc;
        $this->view = new $viewNameSpc;
        $this->validator = new validator\Validator;
        
    }

    public function getAction()
    {
        
    }

    public function postAction($input)
    {
        // $request = $this->getPostData();
    }

    public function putAction()
    {
        $request = $this->getPutData();
        
        if ($request['operation'] == "login")
        {
            $loginCheck = $this->validator->checkRule($request['username'], "isStringText");
            $passwordCheck = $this->validator->checkRule($request['password'], "checkPass");

            if (true === $loginCheck and true === $passwordCheck)
            {
                $result = $this->model->login($request);
            } else {
                $result = [];
                $result['status'] = "err_valid";
                $result['errors'] = array($loginCheck, $passwordCheck);    
            }
            $this->view->putAuth($result);
        } elseif ($request['operation'] == "logout")
        {
            $idCheck = $this->validator->checkRule($request['id'], "isInteger");
            
            if (true === $idCheck)
            {
                $this->model->logout($request);
            }
        }
    }

    public function deleteAction($input)
    {

    }
}