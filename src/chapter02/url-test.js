// import url module
var URL = require('url');

var convertPath = function(base, path){
  var url = URL.resolve(base, path);
  console.log("url = " + url);
};

// convert relative path to absolute path
var base = "http://kujirahand.com/url/test/index.html";

convertPath(base, 'a.html');
convertPath(base, '../b.html');
convertPath(base, '/c.html');
