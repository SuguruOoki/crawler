// import modules
var request = require('request');
var fstream = require('fs');

// set url
var url = 'http://kujirahand.com/';
var savepath = 'test.html';

// download
request(url).pipe(fstream.createWriteStream(savepath));
