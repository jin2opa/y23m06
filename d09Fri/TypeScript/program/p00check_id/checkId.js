"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CheckId {
    constructor(id, pw) {
        this._id = id;
        this._pw = pw;
    }
    /* public set id(value: string){
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
    } */
    checkId() {
        if (this._id === "jin" && this._pw === "111") {
            console.log("yep");
        }
        else {
            console.log("nope");
        }
    }
}
exports.default = CheckId;
