const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menu", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre, prefixe, nomAuteurMessage, mybotpic } = commandeOptions;
    let { cm } = require(__dirname + "/../framework/zokou");
    let coms = {};
    let mode = "public";

    if ((s.MODE).toLowerCase() !== "yes") {
        mode = "private";
    }

    cm.map((com) => {
        if (!coms[com.categorie]) {
            coms[com.categorie] = [];
        }
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');
    const temps = moment().format('HH:mm:ss');
    const date = moment().format('DD/MM/YYYY');

    let infoMsg = `
╭┈┈┈⊷
┣◆ *ʙᴏᴛ ᴏᴡɴᴇʀ:* ɴᴊᴀʙᴜʟᴏ ᴊʙ
┣◆ *ᴘʀᴇғɪx:* *[ ${settings.PREFIXE} ]*
┣◆ *ᴛɪᴍᴇ:* ${formattedTime}
┣◆ *ᴄᴏᴍᴍᴀɴᴅꜱ:* ${commands.length} 
┣◆ *ᴅᴀᴛᴇ:* ${formattedDate}
┣◆ *ᴍᴏᴅᴇ:* ${mode}
┣◆ *ᴛɪᴍᴇ ᴢᴏɴᴇ:* Africa/Nairobi
┣◆ *ᴛᴏᴛᴀʟ ᴜsᴇʀs:* ${formattedTotalUsers} users
┣◆ *ʀᴀᴍ:* ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┣◆ *ᴜᴘᴛɪᴍᴇ:* ${formatUptime(process.uptime())}
╰┈┈┈⊷\n
 
 ᴇɴᴊᴏʏ ɪs ʟɪғᴇ ᴍʏ ғʀɪᴇɴᴅ ʙʏ ɴᴊᴀʙᴜʟᴏ
┃✧┃✧┃✧┃✧┃✧┃✧┃✧┃✧┃✧┃✧┃
•••${readmore}
`;

    let menuMsg = `ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴄᴍᴅ`;
    
    for (const cat in coms) {
        menuMsg += `
⊷✧${cat}. ${toFancyLowercaseFont(command)}✧⊷
╭┈┈┈┈┈┈┈┈┈┈┈⊷ `;
        for (const cmd of coms[cat]) {
            menuMsg += `          
┣◆ ${cmd}. ${toFancyLowercaseFont(command)}`;    
        }
        menuMsg += `
╰┈┈┈┈┈┈┈┈┈┈┈⊷`;
    }
    
    menuMsg += `
> @ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ 2025\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴄᴏɴɴᴇᴄᴛᴇᴅ",
                    body: "𝚊𝚕𝚠𝚊𝚢𝚜•••𝚘𝚗𝚕𝚒𝚗𝚎",
                    thumbnailUrl: "https://files.catbox.moe/60hwdx.jpeg",
                    sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre("🥵🥵 Menu error: " + error);
    }
});

      
