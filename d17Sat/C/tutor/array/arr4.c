#include <stdio.h>

struct CheckId{
  char *id;
  char *pw;
};

int main(int argc, char const *argv[])
{
  struct CheckId *ckd;
  ckd->id = "abc";
  ckd->pw = "111";
  (ckd+1)->id = "def";
  (ckd+1)->pw = "222";

  printf("%s %s %s %s", ckd->id, ckd->pw, (ckd+1)->id, (ckd+1)->pw);

  return 0;
}
