<?php

require_once __DIR__ . '/../database/database.php';

if(array_key_exists('genre', $_GET) && !empty($_GET['genre'])){
  $query = strtolower($_GET['genre']);
  $data = array_filter($data, function ($queryValue) use ($query) {
    return (strpos(strtolower($queryValue['genre']), $query) !== false);
  });   
};
if(array_key_exists('artist', $_GET) && !empty($_GET['artist'])){
  $query = strtolower($_GET['artist']);
  $data = array_filter($data, function ($queryValue) use ($query) {
    return (strpos(strtolower($queryValue['artist']), $query) !== false);
  });   
};


header('Content-Type: applications/json');
echo json_encode($data);

