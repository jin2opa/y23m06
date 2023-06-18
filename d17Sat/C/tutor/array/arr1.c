#include <stdio.h>

int main(int argc, char const *argv[])
{
  char *name = "jin";
  printf("%s\n", name);

  char *alias[] = {"jin", "min", "hin"};
  for(int i = 0; i < sizeof(alias) / sizeof(char *); i++){
    printf("%s\n", alias[i]);
  }

  return 0;
}
