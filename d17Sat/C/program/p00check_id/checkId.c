#include <stdio.h>
#include <string.h>

struct CheckId{
  char *id;
  char *pw;
};

void checkId(struct CheckId ckd){
  // printf("%s\n", id->id);
  int id = strcmp(ckd.id, "admin");
  int pw = strcmp(ckd.pw, "1234");
  if(id == 0 && pw == 0) printf("Welcome\n");
  else printf("Wrong ID or Password\n");
}