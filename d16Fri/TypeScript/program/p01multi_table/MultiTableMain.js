"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MultiTable_1 = __importDefault(require("./MultiTable"));
let mt = new MultiTable_1.default();
mt.start = Number(process.argv[2]);
mt.end = Number(process.argv[3]);
mt.multiTable();
