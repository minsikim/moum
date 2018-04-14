<<<<<<< HEAD:main.js
<<<<<<< HEAD:main.js
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
  });

  mainWindow.loadURL(path.join('file://', __dirname, 'src','index.html'));

  // show when ready to show
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  })

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
=======
>>>>>>> parent of 3a0e939... setup modules:app.js
=======
>>>>>>> parent of 3a0e939... setup modules:app.js
