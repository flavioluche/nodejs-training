'use strict'

var data = 'Flavio Dale Luche';
var buff = new Buffer(data);
var base64data = buff.toString('base64');

console.log(data + ' ' + base64data);