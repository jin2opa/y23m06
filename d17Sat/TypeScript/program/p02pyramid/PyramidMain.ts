import Pyramid01 from "./Pyramid01";

let prd = new Pyramid01();
prd.story00 = Number(process.argv[2]);
prd.story01 = Number(process.argv[3]);
prd.pyramid();
prd.rPyramid()