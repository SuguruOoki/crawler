// analyze links and download the contents
// import modules
var client = require('cheerio-httpcli');
var request = require('request');
var URL = require('url');
var fs = require('fs');
var path = require('path');

// common setting
// define link levels
var LINK_LEVEL = 3;

// define base page
var TARGET_URL = 'http://nodejs.jp/nodejs.org_ja/docs/v0.10/api/';
var list = {};


// check existing the save path
var checkSaveDir = function(fname) {
  // get directory path
  var dir = path.dirname(fname);

  // create directory by recursive
  var dirlist = dir.split('/');
  var p = '';
  for (var i = 0, len = dirlist.length; i < len; i += 1) {
    p += dirlist[i] + '/';
    if(!fs.existsSync(p)) {
      fs.mkdirSync(p);
    }
  }
};


// download the pages
var downloadRec = function(url, level) {
  // check maximum level
  if(level >= LINK_LEVEL) {
    return;
  }

  // ignore exists page
  if(list[url]) {
    return;
  }
  list[url] = true;

  // ignore other pages
  var us = TARGET_URL.split('/');
  us.pop();
  var base = us.join('/');
  if(url.indexOf(base) < 0) {
    return;
  }

  // get HTML
  client.fetch(url, {}, function(err, $, response){
    // check error
    if (err) {
      console.log("Error:", err);
      return;
    }

    // get link pages
    $('a').each(function(index){
      // get anchor link
      var href = $(this).attr('href');
      if(!href) {
        return;
      }

      // change relative path to absolute path
      href = URL.resolve(url, href);

      // ignore request parameter
      href = href.replace(/\#.+$/, "");
      downloadRec(href, level + 1);
    });

    // save page
    if(url.substr(url.length - 1, 1) == '/'){
      url += "index.html";
    }
    var savepath = url.split('/').slice(2).join('/');
    checkSaveDir(savepath);
    console.log(savepath);
    fs.writeFileSync(savepath, $.html());
  });
};

// main function
downloadRec(TARGET_URL, 0);
