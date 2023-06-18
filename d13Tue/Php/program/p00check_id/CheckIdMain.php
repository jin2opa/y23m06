<?php
include "CheckId.php";

$id = readline("Enter your id: ");
$pw = readline("Enter your pw: ");
$ckd = new CheckId($id, $pw);
$ckd->checkId();