<?php

namespace app\models;

use app\libs\PDOHandler as pdo;
use app\core as core;

class AuthModel extends core\Model
{
    /**
     *   
     *  Auth model
     *  get different operations with users
     *  Works with controllers: Auth
     *  Operations: login, logout
     *  Checkers: same username, same email
     * 
    **/

    function __construct()
    {
        $this->sql = new pdo\PDOHandler;
    }

    public function login($data)
    {
        $login = trim(strip_tags($data['username']));
        $password = md5(md5(trim($data['password'])));

        if ($login and $password)
        {
            $userLogin = $this->sql->newQuery()
                                   ->select(['id', 'login', 'password', 'role_id'])
                                   ->from('b_users')
                                   ->where("login='$login'")
                                   ->doQuery();
            $user = $userLogin[0];

            if(!$user)
            {
                return ["status" => "no_user"];
            }

            if($password != $user['password'])
            {
                return ["status" => "err_password"];
            }

            $token = $this->generateToken($user['login']);
            $tokenInput = $this->sql->newQuery()->update('b_users', ['token'], ["'$token'"], 'id=' . $user['id'])->doQuery();

            if($tokenInput)
            {
                $result = [
                    'id'       => $user['id'],
                    'login'    => $user['login'],
                    'role'     => $user['role_id'],
                    'token'    => $token,
                    'status'   => 'success'
                ];
                return $result;
            }
            return ["status" => "error"];
        }
        return ["status" => "empty_form"];
    }

    public function logout($data)
    {
        $id = $data['id'];
        $tokenInput = $this->sql->newQuery()->update('b_users', ['token'], ['NULL'], 'id=' . $id)->doQuery();
    }

    private function generateToken($user="")
    {
        $token = md5($user . time(microtime()));
        return $token;
    }
}