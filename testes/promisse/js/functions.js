const fs = require('fs');

console.log(1);

fs.readFile('./txt1.txt', readFile);

function readFile(err, contents) {
    if (!err) console.log(String(contents));
}

console.log(2);