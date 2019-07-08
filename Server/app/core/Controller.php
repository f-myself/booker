<?php

namespace app\core;

class Controller
{
    /**
     *   
     *  Core file of Controller
     *  Here described methods for working with the different data (get, post, put, delete)
     * 
    **/

    protected $model;
    protected $view;

    public function parseGetData($input)
    {
        // print_r($input);
        $pattern = ['/\.txt/','/\.html/','/\.xml/','/\.json/'];
        $input = preg_replace($pattern, '' ,$input);
        $data = explode('/',$input);
        return $data;
    }

    public function getPostData()
    {
        return $_POST;
    }

    public function getPutData()
    {
        $result = array(); 
        $putdata = file_get_contents('php://input'); 
        $exploded = explode('&', $putdata);  
        
        foreach($exploded as $pair) 
        { 
            $item = explode('=', $pair); 
            if(count($item) == 2) 
            { 
                $result[urldecode($item[0])] = urldecode($item[1]); 
            } 
        }

        return $result;
    }

    public function getDeleteParams($input)
    {
        $data = explode("/", $input);
        return $data;
    }
}