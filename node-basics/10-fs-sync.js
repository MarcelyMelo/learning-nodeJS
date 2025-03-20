const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `\nHeres the result: ${first}`,
  { flag: "a" }, // by default, node will overwrite everything thats inside the archive
);
