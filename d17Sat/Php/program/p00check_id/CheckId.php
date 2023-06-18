<?php
class CheckId{
  private string $id;
  private string $pw;

  public function __construct(string $id, string $pw){
    $this->id = $id;
    $this->pw = $pw;
  }

  public function setId(string $id){
    $this->id = $id;
  }
  public function setPw(string $pw){
    $this->pw = $pw;
  }
  public function getId():string{
    return $this->id;
  }
  public function getPw():string{
    return $this->pw;
  }
  public function checkId():void{
    if($this->id == "admin" && $this->pw == "111"){
      echo "success";
    } else{
      echo "fail";
    }
  }
}
?>