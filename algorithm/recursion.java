

public static int func(int n) {
  if (n==0)
  return 0;
  else
  return n + func(n-1);
}
// func(4) --> 4 + 3 + 2 + 1 + 0

// Factorial : n!
// 0! = 1;
// n! = n x (n-1)!; n>0
public static int factorial(int n)
{
  if (n==0)
  return 1;
  else
  return n*factorial(n-1);
}

// x의 n제곱
public static double power(double x, int n) {
  if(n==0)
  return 1;
  else
  return x*power(x, n-1);
}

// fibonacci number
// fn = fn-1 + fn-2 (n > 1)
public static int fibonacci(int n) {
  if(n<2)
  return 2;
  else
  return fibonacci(n-1) + fibonacci(n-2);
}

// 최대공약수 : Euclid Method
public static double gcd(int m, int n) {
// m이 n 보다 큰 경우만 적용
// n이 더 클 경우 m과 n 을 스왑해주자!
if(m<n) {
  int tmp=m; m=n; n=tmp;
}
if(m%n==0) {
  return n; // m을 n으로 나눴을 때, 0이라면 최대공약수는 n이다.
}
else
return gce(n, m%n);
}

