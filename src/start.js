const { Menu, Tray } = require('electron')
const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const assetsDirectory = path.join(__dirname, '/../public')

let mainWindow
tray = undefined

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, '/../public/index.html'),
        protocol: 'file:',
        slashes: true
      })
  )

  mainWindow.on('closed', () => {
    mainWindow = null;
    tray.destroy();
  })

  mainWindow.on('page-title-updated',() => {
      tray.setTitle(mainWindow.getTitle());
  })
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})  

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
    createTray();
  }
})

const createTray = () => {
    tray = new Tray(path.join(assetsDirectory,'/favicon/favicon-16x16.png'));
  }

  app.on('ready', () => {
      createTray()
      createWindow()
  })
