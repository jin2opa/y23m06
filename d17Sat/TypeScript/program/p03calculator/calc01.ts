import { Calc00 } from "./calc00";

export class Calc01 extends Calc00 {
  third: number;
  constructor(first: number, second: number, third: number) {
    super(first, second);
    this.third = third;
  }
  subtraction(): number {
    return super.add() - this.third;
  }
}