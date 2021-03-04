<?php

require_once __DIR__ . '/../database/database.php';
//filtra per genre
if(array_key_exists('genre', $_GET) && !empty($_GET['genre'])){
  $query = strtolower($_GET['genre']);
  $data = array_filter($data, function ($queryValue) use ($query) {
    return strpos(strtolower($queryValue['genre']), $query) !== false;
  });   
};

//filtra per artist
if(array_key_exists('artist', $_GET) && !empty($_GET['artist'])){
  $query = strtolower($_GET['artist']);
  $data = array_filter($data, function ($queryValue) use ($query) {
    return strpos(strtolower($queryValue['artist']), $query) !== false;
  });   
};
//filtra per title
if(array_key_exists('title', $_GET) && !empty($_GET['title'])){
  $query = strtolower($_GET['title']);
  $data = array_filter($data, function ($queryValue) use ($query) {
    return strpos(strtolower($queryValue['title']), $query) !== false;
  });   
};



if(array_key_exists('genre', $_GET) && empty($_GET['genre']) || count($data) == 0) {
  http_response_code(400);
  exit();
}



header('Content-Type: applications/json');
echo json_encode($data);

