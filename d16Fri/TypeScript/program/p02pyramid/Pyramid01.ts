import Pyramid00 from "./Pyramid00";

class Pyramid01 extends Pyramid00{
  private _story1:number = 0;
  set story1(value:number){
    this._story1 = value;
  }
  get story1():number{
    return this._story1;
  }
  rPyramid():void{
    for(let i = 0; i < this.story1; i++){
      for(let j = 0; j < i; j++){
        process.stdout.write(" ");
      }
      for(let k = 0; k < (this.story1 - i) * 2 - 1; k++){
        process.stdout.write("*");
      }
      console.log();
    }  
}
}
export default Pyramid01;