export class Factorial {
  public static factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }
}