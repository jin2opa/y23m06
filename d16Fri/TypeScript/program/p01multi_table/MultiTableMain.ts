import MultiTable from "./MultiTable";

let mt = new MultiTable();
mt.start = Number(process.argv[2]);
mt.end = Number(process.argv[3]);
mt.multiTable();