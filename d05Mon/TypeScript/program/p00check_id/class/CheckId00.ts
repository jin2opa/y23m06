class CheckId00 {
  private _id: number;
  private _pw: number;
  constructor(id: number, pw: number) {
    this._id = id;
    this._pw = pw;
  }
  set id(id: number) {
    this._id = id;
  }
  get id(): number {
    return this._id;
  } 
}
