class CheckId {
  private _id: string = "";
  private _pw: string = "";
  set id(id: string) {
    this._id = id;
  }
  get id(): string {
    return this._id;
  }
  set pw(pw: string) {
    this._pw = pw;
  }
  get pw(): string {
    return this._pw;
  }
  checkId():void{
    if(this._id === "jin" && this._pw === "111"){
      console.log("yes")
    } else{
      console.log("no")
    }
  }
}
export default CheckId;
