#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct CheckId{
  char *id;
  char *pw;
};

void checkId(struct CheckId ckd){
  int intId = strcmp(ckd.id, "jin");
  int intPw = strcmp(ckd.pw, "111");
  if (intId == 0 & intPw == 0){
    puts("yeah");
  } else{
    puts("no");
  }
}