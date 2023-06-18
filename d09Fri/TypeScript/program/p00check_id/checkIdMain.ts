import CheckId from "./checkId";

let id:string = process.argv[2];
let pw:string = process.argv[3];
let ckd = new CheckId(id, pw);
ckd.checkId();