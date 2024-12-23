long long fib_recursive(int n) {
  return n < 2 ? n : fib_recursive(n - 2) + fib_recursive(n - 1);
}
