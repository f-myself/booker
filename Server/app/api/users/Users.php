<?php

namespace app\api\users;

use app\core as core;

class Users extends core\View
{
    public function getUsers($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }

    public function postUsers($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }

    public function putUsers($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }

    public function deleteUsers($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }
}