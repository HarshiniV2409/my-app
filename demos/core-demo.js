const fs = require('fs');
const path = require('path');
const os = require('os');

fs.writeFileSync("sample.txt","Hello from Node.js core modules!");
const data = fs.readFileSync("sample.txt","utf-8");
console.log("File Content:", data);

console.log("File extension:",path.extname(__filename));

console.log("CPU Count:",os.cpus().length);