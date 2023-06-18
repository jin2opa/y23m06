#include <stdio.h>

struct student{
  char *name;
  int age;
  char gender;
};

int main(int argc, char const *argv[])
{
  struct student s[2];
  s[0] = (struct student){"Rohan", 21, 'M'};
  s[1] = (struct student){"Raj", 22, 'M'};
  printf("%s\n", s[0].name);

  struct student *p;
  p = s;
  printf("%s\n", p->name);
  printf("%s\n", (p+1)->name);

  return 0;
}
