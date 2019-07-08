<?php
class Autoloader 
{
    public static function loadPackages($className)
    {
        $className = '' . str_replace('\\', '/', $className) . '.php';
        include_once($className);
    }
}