export class Power{
  constructor(private base: number, private exponent: number) {}
  power(): number{
    let res:number = 1;
    for(let i = 0; i < this.exponent; i++){
      res *= this.base;
    }
    return res;
  }
}