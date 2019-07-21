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
        $request = $this->getPostData();

        $name = trim(strip_tags($request['name']));
        $email = trim(strip_tags($request['email']));
        $login = trim(strip_tags($request['login']));
        $role = trim(strip_tags($request['role']));
        $password = trim(strip_tags($request['password']));
        $rePassword = trim(strip_tags($request['rePassword']));
        $userId = trim(strip_tags($request['userId']));
        $token = trim(strip_tags($request['token']));

        if (true === $this->validator->checkRule($userId, 'isInteger') and
            true === $this->validator->checkRule($token, 'isStringText'))
        {
            $checkUser = $this->model->checkUser($userId, $token);
        } else {
            return ['status' => 'err_valid'];
        }
        
        if(!$checkUser or $checkUser['status'] != 'success')
        {
            return $this->view->postAdmin($checkUser);
        }

        if($password != $rePassword)
        {
            return ['status' => 'err_password'];
        }

        if(true === $this->validator->checkRule($name, 'isStringText') and
           true === $this->validator->checkRule($email, 'isEmail') and
           true === $this->validator->checkRule($login, 'isStringText') and
           true === $this->validator->checkRule($role, 'isInteger') and
           true === $this->validator->checkRule($password, 'isStringText'))
        {
            $result = $this->model->addUser($name, $email, $login, $role, $password);
        } else {
            $result = ['status' => 'err_valid'];
        }
        $this->view->postAdmin($result);

    }

    public function putAction()
    {
        $request = $this->getPutData();

        $id = trim(strip_tags($request['id']));
        $email = trim(strip_tags($request['email']));
        $name = trim(strip_tags($request['name']));
        $role = trim(strip_tags($request['role']));
        if ($request['passRestore'] == 'true')
        {
            $passRestore = true;
        } else {
            $passRestore = false;
        }
        $password = trim(strip_tags($request['newPass']));
        $rePassword = trim(strip_tags($request['rePass']));
        $userId = trim(strip_tags($request['userId']));
        $token = trim(strip_tags($request['token']));
        
        if (true === $this->validator->checkRule($userId, 'isInteger') and
            true === $this->validator->checkRule($token, 'isStringText'))
        {
            $checkUser = $this->model->checkUser($userId, $token);
        } else {
            return ['status' => 'err_valid'];
        }
        
        if(!$checkUser or $checkUser['status'] != 'success')
        {
            return $this->view->postAdmin($checkUser);
        }

        if($password != $rePassword)
        {
            return ['status' => 'err_password'];
        }

        if(true === $this->validator->checkRule($id, 'isInteger') and
           true === $this->validator->checkRule($name, 'isStringText') and
           true === $this->validator->checkRule($email, 'isEmail') and
           true === $this->validator->checkRule($role, 'isInteger'))
        {
            $result = $this->model->updateUser($id, $name, $email, $role, $passRestore, $password);
        } else {
            $result = ['status' => 'err_valid'];
        }
        $this->view->putAdmin($result);
    }

    public function deleteAction($input)
    {
        $request = $this->getDeleteParams($input);

        $id = trim(strip_tags($request[0]));
        $userId = trim(strip_tags($request[1]));
        $token = trim(strip_tags($request[2]));

        if (true === $this->validator->checkRule($userId, 'isInteger') and
            true === $this->validator->checkRule($token, 'isStringText'))
        {
            $checkUser = $this->model->checkUser($userId, $token);
        } else {
            return ['status' => 'err_valid'];
        }
        
        if(!$checkUser or $checkUser['status'] != 'success')
        {
            return $this->view->deleteAdmin($checkUser);
        }

        if(true === $this->validator->checkRule($id, 'isInteger'))
        {
            $eventsModel = new \app\models\EventsModel;

            $eventsDelete = $eventsModel->deleteEventByUser($id);
            $userDelete = $this->model->deleteUser($id);
        } else {
            $result = ['status' => 'err_valid'];
        }

        if ($eventsDelete['status'] == 'success' and $userDelete['status'] == 'success')
        {
            $result = ['status' => 'success'];
        } else {
            $result = ['status' => 'suc_with_err'];
        }
        $this->view->deleteAdmin($result);
    }
}