#include "checkId00.c"

int main(int argc, char *argv[]){
  struct CheckId ckd;

  // * 1
  ckd.id = malloc(sizeof(char)*4);
  ckd.pw = calloc(4, sizeof(char));
  puts("Enter your id: ");
  scanf("%s", ckd.id);
  puts("Enter your pw: ");
  scanf("%s", ckd.pw);

  // * 2
 /*  ckd.id = argv[1];
  ckd.pw = argv[2]; */

  checkId(ckd);

  free(ckd.id);
  free(ckd.pw);

  return 0;
}