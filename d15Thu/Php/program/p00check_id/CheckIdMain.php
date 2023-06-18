<?php
include "CheckId.php";

$id = readline("Enter your id: ");
$pw = readline("Enter your password: ");
$ckd = new CheckId($id, $pw);
$ckd->checkId();

