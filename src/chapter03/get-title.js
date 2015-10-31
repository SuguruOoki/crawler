// show a title of web site
var TARGET_URL = "http://kujirahand.com";

// create capserjs object
var casper = require('casper').create();

// open the TARGET_URL site
casper.start(TARGET_URL, function(){
  // display title
  this.echo(casper.getTitle());
});

// run casper
casper.run();
