import Pyramid00 from "./Pyramid00";

class Pyramid01 extends Pyramid00{
  private _story01: number = 0;
  set story01(value: number) {
    this._story01 = value;
  } 
  get story01(): number {
    return this._story01;
  }
  rPyramid(){
    for(let i=0; i<this._story01; i++){
      let space = " ".repeat(i);
      let star = "*".repeat((this._story01-i)*2-1);
      console.log(space + star);
    }
  }
}
export default Pyramid01;