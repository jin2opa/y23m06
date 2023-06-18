import { Calc01 } from "./calc01";

export class Calc02 extends Calc01 {
  fourth: number;
  constructor(first: number, second: number, third: number, fourth: number) {
    super(first, second, third);
    this.fourth = fourth;
  }
  public multiply(): number {
    return super.subtraction() * this.fourth;
  }
}