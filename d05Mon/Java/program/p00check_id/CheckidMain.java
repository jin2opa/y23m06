package d05Mon.Java.program.p00check_id;

import java.util.Scanner;

public class CheckidMain{
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter your ID");
    String id = sc.next();
    System.out.println("Enter your PW");
    String pw = sc.next();
    CheckId00 ckd = new CheckId00(id, pw);
    ckd.checkId();

    sc.close();
  }
}