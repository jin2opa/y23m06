package d05Mon.Java.program.p00check_id;

public class CheckId00{
  private String id;
  private String pw;
  public CheckId00(String id, String pw){
    this.id = id;
    this.pw = pw;
  }
  public void setId(String id){
    this.id = id;
  }
  public String getId(){
    return this.id;
  }
  public void setPw(String pw){
    this.pw = pw;
  } 
  public String getPw(){
    return this.pw;
  }
  public void checkId(){
    if(this.id.equals("jin") && this.pw.equals("1234")) {
      System.out.println("yeap");
    } else{
      System.out.println("nope");
    }
  }
}