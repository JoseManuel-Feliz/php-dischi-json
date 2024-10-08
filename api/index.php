<?php
require_once __DIR__ . "/../db/dischi.json";
$output = json_encode("/../db/dischi.json");

header("Content-Type: application/json");
