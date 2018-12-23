'use strict'

var data = 'RmzDoXZpbyBEYWxlIEx1Y2hl';
var buff = new Buffer(data, 'base64');
var text = buff.toString('ascii');

console.log(data + " e " + text);