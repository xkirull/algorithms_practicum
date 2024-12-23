long long fib_loop(int n) {
  long long a = 1;
  long long b = 1;

  for (; n - 2 > 0; n--) {
    long long temp = b;
    b = a + b;
    a = temp;
  }

  return b;
}
