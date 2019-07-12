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
     *  Works with controllers: User
     *  Operations: login, logout
     *  Checkers: same username, same email
     * 
    **/

    function __construct()
    {
        $this->sql = new pdo\PDOHandler;
    }

    function getAllUsers()
    {
        return $this->sql->newQuery()->select('id, name, email')
                                     ->from('b_users')
                                     ->doQuery();
    }

    function getUserById($id)
    {
        return $this->sql->newQuery()->select('id, name, email')
                                     ->from('b_users')
                                     ->where('id=' . $id)
                                     ->doQuery();
    }
}