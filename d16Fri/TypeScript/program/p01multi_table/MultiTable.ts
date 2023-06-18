class MultiTable{
  private _start:number = 0;
  private _end:number = 0; 
  set start(start:number){
    this._start = start;
  }
  get start():number{
    return this._start;
  }
  set end(end:number){
    this._end = end;
  }
  get end():number{
    return this._end;
  }
  multiTable():void{
    for(let i:number = this._start;i<=this._end;i++){
      for(let j:number = 1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
      }
      console.log("=======================");
    }
  }
}

export default MultiTable;