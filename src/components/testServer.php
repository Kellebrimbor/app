<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Credentials: true');
if($_SERVER['REQUEST_METHOD'] !== 'OPTIONS'){
    print_r($_POST);
}
