#include "checkId.c"

int main(int argc, char *argv[]){
  struct CheckId ckd;
  ckd.id = calloc(10, sizeof(char));
  ckd.pw = calloc(10, sizeof(char));
  puts("Enter your id: ");
  scanf("%s", ckd.id);
  puts("Enter your pw: ");
  scanf("%s", ckd.pw);
  checkId(ckd);

  return 0;
}