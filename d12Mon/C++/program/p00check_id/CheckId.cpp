#include <iostream>
using namespace std;

class CheckId{
  public:
    string id;
    string pw;
    CheckId(string id, string pw){
      this->id = id;
      this->pw = pw;
    }
    void checkId(){
      if(this->id == "jin" && this->pw == "111"){
        cout << "yeahyeah";
      } else{
        cout << "nopenope";
      }
    }
};