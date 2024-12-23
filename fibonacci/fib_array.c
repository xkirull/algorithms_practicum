#include <stdio.h>
#include <stdlib.h>

long long fib_array_calc(int n, long long *memo) {
    if (memo[n] != -1)
        return memo[n];

    if (n <= 1) {
        memo[n] = n;
        return n;
    }

    memo[n] = fib_array_calc(n - 1, memo) + fib_array_calc(n - 2, memo);

    return memo[n];
}

long long *fib_array_memo(int n) {
    long long *memo = (long long*)malloc((n + 1) * sizeof(long long));

    for (int i = 0; i <= n; i++) {
        memo[i] = -1;
    }

    return memo;
}

long long fib_array(int n) {
    long long *memo = fib_array_memo(n);

    long long result = fib_array_calc(n, memo);

    free(memo);

    return result;
}

void print_fib_array(int n) {
    long long *memo = fib_array_memo(n);

    fib_array_calc(n, memo);

    printf("List of %d Fibonacci Elements", n);

    printf("[");
    for (int i = 0; i <= n; i++) {
        printf("%lld", memo[i]);
        if (i < n) {
            printf(", ");
        }
    }

    printf("]\n");

    free(memo);
}
