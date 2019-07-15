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
    
}