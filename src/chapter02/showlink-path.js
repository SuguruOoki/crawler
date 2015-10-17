// import module
var client = require('cheerio-httpcli');
var URL = require('url');

// download
var url = "http://www.aozora.gr.jp/index_pages/person81.html";

var param = {};
client.fetch(url, param, function(err, $, response){
  // check error
  if (err) {
    console.log("Error:", err);
    return;
  }

  // extract page links
  $("a").each(function(index) {
    var text = $(this).text();
    var href = $(this).attr('href');

    if (!href) {
      return;
    }

    // convert relative path to absolute path
    var absPath = URL.resolve(url, href);

    // output result
    console.log(text + " : " + href);
    console.log(" => " + absPath);
  });
});
