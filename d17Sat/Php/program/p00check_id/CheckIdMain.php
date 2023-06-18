<?php
include "CheckId.php";

$id = readline("Enter your id:");
$pw = readline("Enter your password:");
$ckd = new CheckId($id, $pw);

/* $ckd->setPw("1234");
echo $ckd->getPw(); */

$ckd->setPw("113");

$ckd->checkId();


