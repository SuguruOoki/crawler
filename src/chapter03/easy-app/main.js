// Display Wikipedia for Electron
var TARGET_URL = "https://ja.wikipedia.org/";

// require essential module
var app = require('app');
var BrowserWindow = require('browser-window');

// open main window
var mainWindow = null;

// event
app.on('ready', function(){
  // create main window
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  // import target url
  mainWindow.loadUrl(TARGET_URL);
});
