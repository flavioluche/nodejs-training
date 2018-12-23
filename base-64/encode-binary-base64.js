'use strict'

const fs = require('fs');

let binary = fs.readFileSync('/home/flavioluche/Imagens/Flavio.jpeg');
let base64data = binary.toString('base64');

fs.writeFileSync('encodedImage.txt', base64data);

console.log('Image has been converted to base64');