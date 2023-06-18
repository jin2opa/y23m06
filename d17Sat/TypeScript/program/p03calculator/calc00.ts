export class Calc00{
  first: number;
  second: number;
  constructor(first: number, second: number){
    this.first = first;
    this.second = second;
  }
  add(): number{
    return this.first + this.second;
  }
}