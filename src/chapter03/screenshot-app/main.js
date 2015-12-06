// define params
var TARGET_URL = "http://atom.io";

// import modules
var app = require('app');
var browserWindow = require('browser-window');
var fs = require('fs');

// run main window
var win = null;
app.on('ready', function() {
  win = new browserWindow({ width: 1024, height: 800 });
  win.loadURL(TARGET_URL);

  // if the page load is finished, the page is caputured.
  win.webContents.on('did-finish-load', captureFunc);
});

// capture function
function captureFunc(){
  win.capturePage(function(img){
    fs.writeFileSync('screenshot.png', img.toPng());
  });
};
