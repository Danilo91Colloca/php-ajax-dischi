<?php

require_once __DIR__ . '/../database/database.php';

header('Content-Type: applications/json');
echo json_encode($data);