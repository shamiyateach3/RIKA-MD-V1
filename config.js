
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------Malvin King--------------------------------------
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "EIRAyLIL#muIIuQ93eV5sbYK8JKA3EdCnShlQyThPdJxS8tVAM5c",
    CAPTION: process.env.CAPTION || "*©  ʙʏ ᴄʏʙᴇʀ ʀɪᴋᴀᴅᴏ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "true",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/7pg24k.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "𝗛𝗜 𝗔𝗠 𝗔𝗟𝗜𝗩𝗘 𝗡𝗢𝗪 𝗔𝗠 𝗥𝗜𝗞𝗔-𝗠𝗗 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗕𝗢𝗧🚀",
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "RIKA-MD",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`Status Seen By RIKA-MD Bot 🦄 `",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
//--------------MADE BY MALVIN KING 2025---------------->-
