<?php

namespace app\models;

use app\core as core;
use app\libs\PDOHandler as pdo;

class UsersModel extends core\Model
{
    /**
     *   
     *  Users model
     *  get different operations with users
     *  Works with controllers: Users, Admin
     *  Operations: login, logout
     *  Checkers: same username, same email
     * 
    **/

    function __construct()
    {
        $this->sql = new pdo\PDOHandler;
    }

    public function getAllUsers()
    {
        $users = $this->sql->newQuery()->select('id, name, email')
                                     ->from('b_users')
                                     ->doQuery();
        $result = array("data" => $users, "status" => "success");
        return $result;
    }

    public function getUserById($id)
    {
        $user = $this->sql->newQuery()->select('id, name, email')
                                     ->from('b_users')
                                     ->where('id=' . $id)
                                     ->doQuery();

        $result = array("data" => $user);
        if ($user[0])
        {
            $result['status'] = 'success';
            return $result;
        }

        $result['status'] = 'no_user';
        return $result;
    }

    public function addUser($name, $email, $login, $role, $password)
    {
        if(!$this->checkRepeat($login, $email))
        {
            return ["status" => "err_exists"];
        }

        $hashPass = md5(md5($password));

        $result = $this->sql->newQuery()->insert("b_users", ["name", "email", "role_id", "login", "password"], "'$name', '$email', '$role', '$login', '$hashPass'")->doQuery();

        if ($result)
        {
            return ["status" => "success"];
        }

        return ["status" => "error"];
    }

    public function updateUser($id, $name, $email, $role, $passRestore=false, $password)
    {
        if(!$this->checkRepeat($login, $email, $id))
        {
            return ["status" => "err_exists"];
        }

        if(!$passRestore)
        {
            $result = $this->sql->newQuery()->update("b_users", ["name", "email", "role_id"], ["'$name'", "'$email'", "'$role'"], "id='$id'")->doQuery();
            //print_r ($this->sql->getErrors());
        } else {
            $hashPass = md5(md5($password));
            $result = $this->sql->newQuery()->update("b_users", ["name", "email", "role_id", "password"], ["'$name'", "'$email'", "'$role'", "'$hashPass'"], "id='$id'")->doQuery();
        }

        if ($result)
        {
            return ["status" => "success"];
        }
        return ["status" => "error"];
    }

    public function deleteUser($id)
    {
        $result = $this->sql->newQuery()->delete("b_users", "id='$id'")->doQuery();

        if ($result)
        {
            return ["status" => "success"];
        }
        return ["status" => "error"];
    }

    public function checkUser($id, $token)
    {
        $user = $this->sql->newQuery()->select('id, role_id, token')
                                      ->from('b_users')
                                      ->where('id=' . $id)
                                      ->doQuery();
        $user = $user[0];

        if($token != $user['token'])
        {
            return ['status' => 'err_login'];
        }
        return ['status' => 'success'];
    }

    public function checkAdmin($id, $token)
    {
        $user = $this->sql->newQuery()->select('id, role_id, token')
                                      ->from('b_users')
                                      ->where('id=' . $id)
                                      ->doQuery();
        $user = $user[0];
        
        if ($user['role_id'] != 1 or $token != $user['token'])
        {
            return ['status' => 'not_admin'];
        }
    
        return ['status' => 'success'];
    }

    private function checkRepeat($login, $email, $userId=false)
    {
        if(!$userId)
        {
            $nickMails = $this->sql->newQuery()
                                  ->select(['login', 'email'])
                                  ->from('b_users')
                                  ->where("login='$login'")
                                  ->l_or("email='$email'")
                                  ->doQuery();
        } else {
            $nickMails = $this->sql->newQuery()
                                  ->select(['login', 'email'])
                                  ->from('b_users')
                                  ->where("login='$login'")
                                  ->l_or("email='$email'")
                                  ->l_and("id !='$userId'")
                                  ->doQuery();
        }
        if ($nickMails[0])
        {
            return false;
        }
        return true;
    }

    
}