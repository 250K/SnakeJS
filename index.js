const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  
    const mainWindow = new BrowserWindow({
        frame: false,
        title:"Snake - KiopDev",
        icon: __dirname + "/assets/icon.ico",
        width: 800,
        height: 500,
        webPreferences: {
          nodeIntegration: true
        }
      })
    
      mainWindow.loadURL(path.join(__dirname, "assets/html/index.html"))
    
    }
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
   
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
