<?php

require_once __DIR__ . '/../database/database.php';

if(array_key_exists('genre', $_GET) && !empty($_GET['genre'])){
  $queryKey = strtolower($_GET['genre']);
  $data = array_filter($data, function ($queryValue) use ($queryKey) {
    return (strpos(strtolower($queryValue['genre']), $queryKey) !== false);
  });
   
};
header('Content-Type: applications/json');
echo json_encode($data);

