#include <stdio.h>
#include <string.h>

struct CheckId{
  char *id;
  char *pw;
};

void checkId(struct CheckId *ckd){
  int id = strcmp(ckd->id, "jin");
  // int id = strcmp((*ckd).id, "jin");  
  int pw = strcmp(ckd->pw, "123");
  if(id == 0 && pw == 0){
    printf("Welcome\n");
  } else{
    printf("Wrong ID or Password\n");
  }
}