const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_21_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODksXG4gICAgICAgIDE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUyLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODksXG4gICAgICAgIDE4LFxuICAgICAgICA1MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyNixcbiAgICAgICAgODEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDk0LFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMixcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYeHZUaUh3ZlJSWjhYNW5wRzl0NkJEU3F2N0MydjdzYjFiYlA1b3FzRkF3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA1MDAxNjE4OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdENzZGNTQ1QjhFNjQ2OTc5MDdENzlBM0YxOEY5MkJEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDkwMjQ3NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyNTA1MDAxNjE4OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUyMzIxQjU5MzgzRDUyNUJFNjhDMTFDNUZCNjIwRTEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDkwMjQ3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQMzJva00xNlFOU0loaVktdzUyZlhnXCIsXG4gIFwicGhvbmVJZFwiOiBcImMyOTI5MmM3LTdjYTMtNGI3NC04YmI0LWY3NjQ2MTQ1MDMwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICAzNyxcbiAgICAgIDYxLFxuICAgICAgMTAwLFxuICAgICAgMjAyLFxuICAgICAgMjMsXG4gICAgICAxNTgsXG4gICAgICA0MCxcbiAgICAgIDEwNyxcbiAgICAgIDIwMyxcbiAgICAgIDQyLFxuICAgICAgNzcsXG4gICAgICA1NSxcbiAgICAgIDg4LFxuICAgICAgMTYxLFxuICAgICAgOTgsXG4gICAgICA2OSxcbiAgICAgIDE2MyxcbiAgICAgIDI0NCxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDcxLFxuICAgICAgMTQ2LFxuICAgICAgMTg0LFxuICAgICAgMTQ0LFxuICAgICAgNjksXG4gICAgICA1MyxcbiAgICAgIDYsXG4gICAgICAxNjUsXG4gICAgICAxOTUsXG4gICAgICAxNTcsXG4gICAgICAxNjcsXG4gICAgICAxNTIsXG4gICAgICAxMDMsXG4gICAgICAxMzgsXG4gICAgICAxLFxuICAgICAgMjQ2LFxuICAgICAgMjUzLFxuICAgICAgMTc4LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFES0xTRDZMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjUwNTAwMTYxODk2OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NzM4ODk3MDY3NjMzOToxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimajvuI9NciBPaW0gTGR5IPCfhpLwn5iOXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Uyb1dBUXhvV2l1d1lZQ3lBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXRUdtRTdBSjJ0NjQ0WHRvcExYWHJicDFZNEVRK2FrN1RoSEZkNWRWYnpRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFLVXUya2grRk1EY1h2QXVTR0pIdWhiK3ZZMHRVVk5iZll2UURrTjY3UFVjQlByRlQ4Y3Q0Vjc5ZGxIa1ZHTkJ4TjBjZ0oxUFpNcHZTZDdlKzRJM0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInQrM1V6RFJHaEpXaWRhZnlCZ2ZpVGRyekdZL3NFSElUMy9OdkxILzZWcGJWNlQ2TUxISE1wTlU3anBrZ0pCSnUxeTd2bml6cmM3WUlPZkZMTG5RRkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTA1MDAxNjE4OTY6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5MDI0NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQdEZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVB0Ri5qc29uIjogIntcImtleURhdGFcIjpcIi8yZlVkQXdYOUIrTWhzdXNhSHVwSWhnVDlyNWxkUzkrVG40VWtIcHB0eDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAxODc0MjgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
