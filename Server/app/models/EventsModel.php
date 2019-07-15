<?php

namespace app\models;

use app\core as core;
use app\libs\PDOHandler as pdo;

class EventsModel extends core\Model
{
    /**
     *   
     *  Events model
     *  get different operations with events
     *  Works with controllers: Event
     *  Operations: getAllEvents, createEvent
     * 
    **/

    function __construct()
    {
        $this->sql = new pdo\PDOHandler;
    }

    public function getAllEvents()
    {
        
    }

    public function createEvent()
    {

    }

}
