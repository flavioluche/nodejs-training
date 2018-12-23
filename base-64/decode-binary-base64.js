'use strict' 

const fs = require('fs');

let base64data = fs.readFileSync('/home/flavioluche/nodejs-training/base-64/encodedImage.txt', 'utf8');

let binary = new  Buffer(base64data, 'base64');
fs.writeFileSync('Flavio.jpeg', binary);

console.log('Base64 has been converted to image.');