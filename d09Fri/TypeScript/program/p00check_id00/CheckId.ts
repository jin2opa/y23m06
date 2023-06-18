class CheckId{
  private _id:string = "";
  private _pw:string = "";
  public set id(value: string){
    this._id = value;
  }
  public get id(){
    return this._id;
  }
  public set pw(value: string){
    this._pw = value;
  }
  public get pw(){
    return this._pw;
  }
  public checkId(){
    if(this._id === "jin" && this._pw === "111"){
      console.log("y");
    } else{
      console.log("n");
    }
  }
}
export default CheckId;