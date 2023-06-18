namespace p00check_id
{
  class CheckId{
    public string id;
    public string pw;
    public CheckId(string id, string pw){
      this.id = id;
      this.pw = pw;
    }
    public void checkId(){
      if(this.id == "jin" && this.pw == "111"){
        Console.WriteLine("yes");
      } else{
        Console.WriteLine("no");
      }
    }
  }
}