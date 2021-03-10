const electron = require("electron");
const DBManager = require("./db/db_manager");

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(`file://${__dirname}/dist/cougar/index.html`);
  mainWindow.on("closed", () => app.quit());

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

app.on("ready", createWindow);

const menuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Sth",
        click() {
          console.log("Sth");
        },
      },
      {
        label: "Quit",
        accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
];

// MacOS menu placeholder
if (process.platform === "darwin") {
  menuTemplate.unshift({});
}

// Toggle Developer Tools menu entry
if (process.env.NODE_ENV !== "production") {
  menuTemplate.push({
    label: "View",
    submenu: [
      { role: "reload" },
      {
        label: "Toggle Developer Tools",
        accelerator:
          process.platform === "darwin" ? "Command+Alt+I" : "Ctrl+Shift+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
    ],
  });
}
