#include <stdio.h>

int main(int argc, char const *argv[])
{
  int const num = 1;
  printf("%d\n", num);
  // num = 2; // error

  int *ptr = &num;
  *ptr = 2;
  printf("%d\n", num);
  // ! initialization discards 'const' qualifier from pointer target type

  int num = 3;
  printf("%d\n", num); // ! conflicting type qualifiers for 'num'

  return 0;
}
