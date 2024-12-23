#include "fib_recursive.c"
#include "fib_loop.c"
#include "fib_array.c"
#include "fib_binet.c"
#include "fib_big_even_odd.c"

#include <time.h>
#include <stdio.h>
#include <stdlib.h>

#define printExecTime(name, n, t, r) printf("Program: %s, N-element: %d, Elapsed: %f seconds, Result: %lld\n", name, n, (double)(clock()-(t)) / CLOCKS_PER_SEC, r)

void run_program(long long(*fn)(int), int n, char *name) {
    clock_t t = clock();
    
    long long result = fn(n);

    printExecTime(name, n, t, result);
}

int main(int argc, char **argv)
{
    int n = argc > 1 ? atoi(argv[1]) : 64;

    if (n <= 0) {
      return 1;
    }

    run_program(fib_recursive, n > 24 ? 24 : n, "fib_recursive");
    run_program(fib_loop, n > 32 ? 32 : n, "fib_loop");
    run_program(fib_array, n > 40 ? 40 : n, "fib_array");
    run_program(fib_binet, n > 64 ? 64 : n, "fib_binet");

    printf("\n");

    print_fib_array(n > 40 ? 40 : n);
    printf("The %d Fibonacci number is %s\n", n, fib_big_even_odd(n) ? "even" : "odd");

    return 0;
}
