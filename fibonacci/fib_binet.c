#include <math.h>

long long fib_binet(int n)
{
    double phi = 0.5 * (1.0 + sqrt(5.0));
    double t = (pow(phi, n) - pow(-phi, -n)) / (2.0 * phi - 1.0);
    return (long long)(t + 0.5);
}
