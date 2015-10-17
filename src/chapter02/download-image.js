// import modules
var client = require('cheerio-httpcli');
var request = require('request');
var fstream = require('fs');
var URL = require('url');

// create download directory
var savedir = __dirname + '/img';
if(!fstream.existsSync(savedir)) {
  fstream.mkdirSync(savedir);
}

// set target HTML file
var url = "http://en.wikipedia.org/wiki/Main_Page";
var param = {};

// get target HTML file
client.fetch(url, param, function(error, $, response){
  if (error) {
    console.log('error');
    return;
  }

  // output extracted links
  $('img').each(function(index){
    var src = $(this).attr('src');

    // convert relative path to absolute path
    src = URL.resolve(url, src);

    // create save file
    var fname = savedir + '/' + URL.parse(src).pathname.replace(/[^a-zA-Z0-9¥.]+/g, '_');

    // download
    request(src).pipe(fstream.createWriteStream(fname));
  });
});
