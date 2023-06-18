#include "checkId.c"
#include <stdlib.h>

int main(int argc, char *argv[]){
  struct CheckId ckd;
  // ckd.id = atoi(argv[1]);
  ckd.id = malloc(sizeof(char));
  ckd.pw = malloc(sizeof(char));
  puts("Enter your ID");
  scanf("%s", ckd.id);
  puts("Enter your PW");
  scanf("%s", ckd.pw);
  checkId(ckd);

  return 0;
}