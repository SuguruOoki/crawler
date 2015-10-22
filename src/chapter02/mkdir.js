// import module
var fs = require('fs');

// create directory
console.log('create dirctory.');
fs.mkdir("test", function(){
  console.log('finish!');
});
console.log('run mkdir command.');
