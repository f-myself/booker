<?php

namespace app\api\admin;
use app\core as core;

class Admin extends core\View
{
    
    public function getAdmin($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }

    public function postAdmin($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }

    public function putAdmin($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }

    public function deleteAdmin($data="", $viewType="")
    {
        $this->restResponse("200");
        $this->showResponse($data, $viewType);
    }

}