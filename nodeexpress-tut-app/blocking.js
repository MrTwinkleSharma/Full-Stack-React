console.log("Script Started..............");

const fs = require('fs');

const data = fs.readFileSync('text.txt');
console.log(data.toString());
console.log("Script Finished..............");
