// https://stackoverflow.com/a/70230713

typedef enum { false, true } boolean;

unsigned short int last_fib_digit(int n) {
  const unsigned short int cycle [] = {0,1,1,2,3,5,8,3,1,4,5,9,4,3,7,0,7,7,4,1,5,6,1,7,8,5,3,8,1,9,0,9,9,8,7,5,2,7,9,6,5,1,6,7,3,0,3,3,6,9,5,4,9,3,2,5,7,2,9,1,0};
  return cycle[n % 60];
}

boolean fib_big_even_odd(int n) {
  return last_fib_digit(n) % 2 == 0;
}
