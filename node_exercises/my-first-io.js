const fs = require('fs');

file = fs.readFileSync(process.argv[2]);
const str = file.toString();

const lines = str.split(/\r?\n/);
console.log(lines.length-1);

