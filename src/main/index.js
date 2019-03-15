const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', () => {
    win = new BrowserWindow({width: 800, height: 600, 
                            show: false, icon: path.join(__dirname, '../../resources/icon.png'),
                            resizable: false,
                            autoHideMenuBar: true});
    // win.setMenu(null);
    win.loadURL('file:///' + path.resolve(__dirname, '../renderer/index.html'));
    win.on('ready-to-show', () => {
        win.show();
    });
});