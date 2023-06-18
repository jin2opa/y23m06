import CheckId from "./CheckId";

let ckd = new CheckId();
ckd.id = process.argv[2];
ckd.pw = process.argv[3];
ckd.checkId(); 