<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require_once "config.php";
require_once "Autoloader.php";

spl_autoload_register(array("Autoloader", 'loadPackages'));


require_once "app/Start.php";