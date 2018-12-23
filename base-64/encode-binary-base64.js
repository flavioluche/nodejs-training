'use strict'

const fs = require('fs');

var buff = fs.readFileSync('/home/flavioluche/Imagens/Flavio.jpeg');
var base64data = buff.toString('base64');

console.log('A imagem convertida é ' + base64data);