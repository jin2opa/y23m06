namespace p00check_id
{
  class Program{
    static void Main(string[] args){
      Console.WriteLine("Enter your id: ");
      string id = Console.ReadLine() ?? "jin";
      Console.WriteLine("Enter your pw: ");
      string pw = Console.ReadLine() ?? "DefaultPw";
      CheckId ckd = new CheckId(id, pw);
      ckd.checkId();
    }
  }
}