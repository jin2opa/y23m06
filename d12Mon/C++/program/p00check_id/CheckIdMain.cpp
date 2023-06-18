#include "CheckId.cpp"

int main(){
  string id, pw;
  cout << "Enter your id: "<< endl;
  cin >> id;
  cout << "Enter your pw: "<< endl;
  cin >> pw;
  CheckId ckd(id, pw);
  ckd.checkId(); 

  return 0;
}