"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pyramid01_1 = __importDefault(require("./Pyramid01"));
let prd = new Pyramid01_1.default();
prd.story00 = Number(process.argv[2]);
prd.story01 = Number(process.argv[3]);
prd.pyramid();
prd.rPyramid();
