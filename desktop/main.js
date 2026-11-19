const {app,BrowserWindow}=require('electron'),path=require('path');
function create(){const w=new BrowserWindow({width:1280,height:720,backgroundColor:'#0d0b14',autoHideMenuBar:true,title:'Abismo de Cinzas',icon:path.join(__dirname,'../icons/icon-512.png')});w.loadFile(path.join(__dirname,'../index.html'));w.webContents.on('before-input-event',(e,i)=>{if(i.key==='F11'&&i.type==='keyDown')w.setFullScreen(!w.isFullScreen())})}
app.whenReady().then(create);app.on('window-all-closed',()=>app.quit());
