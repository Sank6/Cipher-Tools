const { app, BrowserWindow } = require('electron');

function createWindow () {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    resizable: false,
    icon: "icon.png"
  })
  win.setMenuBarVisibility(false);
  win.loadFile('ui/index.html');
}

app.whenReady().then(createWindow)