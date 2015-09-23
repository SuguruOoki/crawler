// define function
// download function
var download = function(url, savepath, callback) {
  // import module
  var http = require('http');
  var fs = require('fs');

  // set output path
  var outfile = fs.createWriteStream(savepath);

  // download web page
  var request = http.get(url, function(response){
    response.pipe(outfile);
    response.on('end', function(){
      outfile.close();
      callback();
    });
  });
};


// download
download(
  'http://www.aozora.gr.jp/index_pages/person81.html',
  'miyazawa_kenji.html',
  function() { console.log('kenji ok'); }
);

download(
  'http://www.aozora.gr.jp/index_pages/person48.html',
  'natsume_souseki.html',
  function() { console.log('souseki ok'); }
);
