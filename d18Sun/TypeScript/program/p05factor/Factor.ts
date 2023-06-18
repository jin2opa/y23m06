export class Factor{
  private _num: number;

  constructor(num: number){
    this._num = num;
  }
  /* get num(): number{
    return this._num;
  }
  set num(num: number){
    this._num = num;
  } */
  factor():void{
    let res: string = "";
    for(let i=1; i<=this._num; i++){
      if(this._num % i == 0){
        res += i + " ";
      }
    }
    console.log(res);
  }
}