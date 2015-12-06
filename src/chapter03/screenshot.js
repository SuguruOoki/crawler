// capture page

// create a casper object
var casper = require('casper').create();

// start
casper.start();

// open a page
casper.open('http://www.google.co.jp');

// capture the page
casper.then(function(){
  casper.capture("page.png");
});

// run
casper.run();
