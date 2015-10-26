// tenki rss url
var RSS = 'http://www.drk7.jp/weather/xml/23.xml';

// import module
var client = require('cheerio-httpcli');

// download rss
client.fetch(RSS, {}, function(error, $, response) {
  if(error) {
    consle.log('error');
    return;
  }

  // output result
  $('weatherforecast > title').each(function(index){
    var title = $(this).text();
    console.log(title);
  });
});
