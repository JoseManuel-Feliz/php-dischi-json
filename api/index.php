<?php
$output = file_get_contents("../db/dischi.json");

header("Content-Type: application/json");

echo $output;
