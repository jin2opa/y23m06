<?php
class CheckId{
  private string $id;
  private string $pw;
  public function __construct(string $id, string $pw){
    $this->id = $id;
    $this->pw = $pw;
  }
  public function checkId(){
    if($this->id == "jin" && $this->pw == "111"){
      echo "yyy";
    } else{
      echo "nnn";
    }
  }
}