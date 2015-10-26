// tenki rss url
var RSS = 'http://www.drk7.jp/weather/xml/23.xml';

// import modules
var parseString = require('xml2js').parseString;
var request = require('request');

// download rss
request(RSS, function(error, response, body){
  if(!error && response.statusCode == 200) {
    analyzeRSS(body);
  }
});

// analyze rss
function analyzeRSS(xml) {
  // convert xml to jsObject
  parseString(xml, function(error, obj){
    if(error) {
      console.log(error);
      return;
    }

    console.log(JSON.stringify(obj));
  });
}
