<?php
class CheckId{
  private string $id;
  private string $pw;
  public function __construct(string $id, string $pw){
    $this->id = $id;
    $this->pw = $pw;
  }
  public function checkId(){
    if($this->id == "admin" && $this->pw == "1234"){
      echo "yes";
    } else{
      echo "no";
    }
  }
}