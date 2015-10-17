// import modules
var client = require('cheerio-httpcli');
var URL = require('url');

// download
var url = "http://en.wikipedia.org/wiki/Main_Page";
var param = {};

client.fetch(url, param, function(error, $, response) {
  if(error){
    console.log('error');
    return;
  }

  // output extracted links
  $('img').each(function(index){
    var src = $(this).attr('src');
    src = URL.resolve(url, src);
    console.log(src);
  });
});
