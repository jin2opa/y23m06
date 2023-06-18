"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkId_1 = __importDefault(require("./checkId"));
let id = process.argv[2];
let pw = process.argv[3];
let ckd = new checkId_1.default(id, pw);
ckd.checkId();
