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


global.devs = "923473619374" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923473619374";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923473619374";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '5' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_38_05_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcsXG4gICAgICAgIDIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDQzLFxuICAgICAgICAzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDAsXG4gICAgICAgIDkwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkwLFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg5LFxuICAgICAgICA0LFxuICAgICAgICA0NixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDgzLFxuICAgICAgICA3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc5LFxuICAgICAgICA2NixcbiAgICAgICAgMixcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMd3BVdUMrTVBaMXlKU1YzeWlHNEQ3R01YS0JYV1RzYVNUSjlaUnZtczdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXYnp6VldheFExaWRLRC1NTUVTNjdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwYmY1MTMyLTQyYzYtNDI4Mi04NzY2LWQ2ZjVmYmUxNjk3NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxLFxuICAgICAgMTUyLFxuICAgICAgMjQ2LFxuICAgICAgMTg0LFxuICAgICAgOCxcbiAgICAgIDE1MixcbiAgICAgIDEwNixcbiAgICAgIDEyNCxcbiAgICAgIDk5LFxuICAgICAgMjAsXG4gICAgICAyMTAsXG4gICAgICA5OCxcbiAgICAgIDY2LFxuICAgICAgMjIzLFxuICAgICAgMTgsXG4gICAgICAxNTIsXG4gICAgICAxOTUsXG4gICAgICAxMjAsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICA4NixcbiAgICAgIDg3LFxuICAgICAgMjI0LFxuICAgICAgOTUsXG4gICAgICAzLFxuICAgICAgMjEzLFxuICAgICAgMTA2LFxuICAgICAgMTI2LFxuICAgICAgNDAsXG4gICAgICAyNDgsXG4gICAgICAxNyxcbiAgICAgIDEzOCxcbiAgICAgIDQ3LFxuICAgICAgMjAxLFxuICAgICAgOSxcbiAgICAgIDIwMSxcbiAgICAgIDEyNyxcbiAgICAgIDUsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBVk02SDVHVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDczNjE5Mzc0OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzU5MTM4MjQyMTUxMTQ6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9Nakp3REVJU3g1OEFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJoMkpJNWQ2RmJ0dnltMDl6RnAzSkIrSDVyOG9mZDA3U3drRkhWOGM0OUFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIktQYWZhWGJrYlR4ZFRlSXZ3RzV1dnNvbEZxYzYybnIvQ3FFVHlqcVJ4TWhJcUlPcWdHRDdyMW1NZkxwaWNINTgzT21DZ2o0aCtFUjEzS1RLdWRIZUNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIit2TzZsT0lVenJnRW1kZkFhQ3VJZHFyNFJiMzRkQyszUVplSzNDa0xzajNFaDRzT3VxY00wMUhqeFhvYmNDQTBqVEk1djdGcFNOeTVLdTF1SFh4MGdRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ3MzYxOTM3NDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDY1MjQyOTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHb25cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdvbi5qc29uIjogIntcImtleURhdGFcIjpcIkJOWG1iNWlTY1VVUzIwMER4OCs3UXM3czJRbE9yZE51SnBsRTJvcGNub0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY0MjI0ODE5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NDY1MjQzMDQ4MTFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Raju Boss",
  packname: process.env.PACK_NAME || "Raju Boss",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Raju Boss",


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



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_e17fe171b8d395b9df440e504aa8aeaacb08ead66db9692e";
global.aitts_Voice_Id = process.env.AITTS_ID|| "wHI7GVgoHNG9c8H7zXAt";





















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
