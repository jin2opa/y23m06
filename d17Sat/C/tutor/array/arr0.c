#include <stdio.h>

int main(int argc, char const *argv[])
{
  int num[] = {1, 3, 5};
  for(int i=0; i<sizeof(num)/sizeof(int); i++){
    printf("%d\n", num[i]);
  }

  int a = 1;
  int b = 2;
  int c = 3;
  int *ptr[] = {&a, &b, &c};
  printf("%d\n", *ptr[0]);
  return 0;
}
 