<?php

/**
 *  Point of entry. All requests come here.
 */
require_once "config.php";
require_once "Autoloader.php";

spl_autoload_register(array("Autoloader", 'loadPackages'));


require_once "app/Start.php";