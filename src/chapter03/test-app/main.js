// import module
var app = require('app');
// var ipc = require('ipc')
var BrowserWindow = require('browser-window');
var ipcMain = require('electron').ipcMain;

// run main window
var mainWindow = null;
app.on('ready', function(){
  mainWindow = new BrowserWindow({ width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});

// get message
ipcMain.on('synchronous-message', function(event, arg){
  console.log(arg + ': accept');
  event.returnValue = arg.a * arg.b;
});

// get message
ipcMain.on('asynchronous-message', function(event, arg){
  console.log(arg + ': accept');
  var result = arg.a * arg.b;
  event.sender.send('asynchronous-reply', result);
});
