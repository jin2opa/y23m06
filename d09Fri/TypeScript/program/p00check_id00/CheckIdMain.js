"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CheckId_1 = __importDefault(require("./CheckId"));
let ckd = new CheckId_1.default();
ckd.id = process.argv[2];
ckd.pw = process.argv[3];
ckd.checkId();
