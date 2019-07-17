<?php

define('DB_DRV_MYSQL',          'mysql');
define('DB_DRV_PGSQL',          'pgsql');
define('DB_HOST',               'localhost');

/* Config DB for home using */
// define('DB_USER',               'root');
// define('DB_PASSWORD',           '');
// define('DB_NAME',               'booker');


/* Config DB for gfl's server */
define('DB_USER',               'user6');
define('DB_PASSWORD',           'user6');
define('DB_NAME',               'user6');

define('SERV_CROSS_DOMAIN',     true); //switch to false if server and client at the same domain or for build project

define('VIEW_TYPE_DEFAULT',     '.json');
// define('ERR_CAR_BY_PARAMS', "No books by this params. Please, try again");

/** View types **/
define('VIEW_JSON',             'json');
define('VIEW_HTML',             'html');
define('VIEW_XML',              'xml');
define('VIEW_TEXT',             'txt');

define('WEEK_SECONDS',           604800);


/* Error messages for PDOHandler */
define('ERR_CONNECT_DB',        "Cannot connect database. Check username or password");
define('ERR_VAL_COLUMNS',       "Value of colums must be string or array type!");
define('ERR_VAL_TABLENAME',     "Value of table name must be string type!");
define('ERR_VAL_CONDITIONS',    "Conditions must be a string type!");
define('ERR_VAL_LIMIT',         "Limit must be a numeric type!");
define('ERR_VAL_VALUES',        "Values must be string or array type!");
define('ERR_VAL_UPDATE',        "Columns and Values must be array type!");

/* Error messages for Validator */
define('ERR_STRING_LIMIT',      "String's length more then limit");
define('ERR_STRING_TYPE',       "Recieved value is not string or string is empty");
define('ERR_STRING_CHARS',      "Recieved value is not string");
define('ERR_EMAIL_FILTER',      "Email is not correct");
define('ERR_INT_NULL',          "Recieved data is null");
define('ERR_INT_NOT_NUMERIC',   "Recieved data is not numeric");
define('ERR_PASS_SPACES',       "Password contain spaces at beginning or end of the string");