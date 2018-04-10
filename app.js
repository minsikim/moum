const {app, BrowserWindow} = require('electron');
const path = require('path');
const locals = {};

//Open Main window(first)
app.on('ready', ()=>{
  let mainWindow = new BrowserWindow({
    show: false,
    width: 1600,
    height: 900,
    fullscreenWindowTitle: true,
    icon: './'
  });

  mainWindow.loadURL(path.join('file://', __dirname, 'src','index.html'));

  // show when ready to show
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  })
});
