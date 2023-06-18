#include <stdio.h>
#include <string.h>
#include <stdlib.h>

struct CheckId{
  char *id;
  char *pw;
};

void checkId(struct CheckId ckd){
  int id = strcmp(ckd.id, "jin");
  int pw = strcmp(ckd.pw, "111");
  if(id == 0 && pw == 0) puts("yey");
  else puts("nope");
}