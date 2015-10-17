// import module
var client = require('cheerio-httpcli');

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
    console.log(text + ':' + href);
  });
});
