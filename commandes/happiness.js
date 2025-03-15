const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "happiness", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
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
  𝗛𝗲𝗹𝗹𝗼👋, ${nomAuteurMessage} 


*🌇 Hy good evening, •• .* ${nomAuteurMessage} 

╭┈⊷〔 ✧⁠@𝘀𝗶𝗿 𝗵𝗮𝗽𝗽𝗶𝗻𝗲𝘀𝘀✧⁠〕┈⊷𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭𑲭
┣◆ *ʙᴏᴛ ᴏᴡɴᴇʀ* : ${s.OWNER_NAME}
┣◆ *ᴘʀᴇғɪx* :  *[ ${s.PREFIXE} ]*
┣◆ *ᴛɪᴍᴇ* : ${temps}
┣◆ *ᴄᴏᴍᴍᴀɴᴅꜱ* : ${cm.length} 
┣◆ *ᴅᴀᴛᴇ* : ${date} 
┣◆ *ᴍᴏᴅᴇ* : ${mode}  
┣◆ *ᴛɪᴍᴇ ᴢᴏɴᴇ* : Africa/Dar Es Salam
┣◆ *ᴅéᴠᴇʟᴏᴘᴘᴇᴜʀs* : sir Jb
┣◆ *ᴘʟᴀᴛᴇғᴏʀᴍᴇ* : ${os.platform()}
┣◆ *ʀᴀᴍ* :  ${format(os.totalmem()-os.freemem())}/${format(os.totalmem())}
╰┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻⊷

    
  REPLY A  WITH NAME CMD  

1࿇ TYPE  AI MENU

2࿇ TYPE  AUTO EDIT MENU

3࿇ TYPE DOWNLOAD MENU

4࿇ TYPE CONTROL MENU

5࿇ TYPE CONVERSATION MENU

6࿇ TYPE FUN MENU

7࿇ TYPE GAMES MENU

8࿇ TYPE GENERAL MENU

9࿇ TYPE GROUP MENU

10࿇ TYPE GITHUB MENU

11࿇ TYPE IMAGE MENU

12࿇ TYPE LOGO MENU

13࿇ TYPE MODS MENU

14࿇ TYPE CONNECTOR MENU

15࿇ TYPE SEARCH MENU

16࿇ TYPE TTS MENU

17࿇ TYPE ANIME MENU


🌐 NJABULO JB REPOSITORY INFO 🌐

💻 Name: Njabulo-Jb
📜 Description: Sir Njabulo-Jb The Ultimate device WhatsApp Bot!  An AI-powered, multi-functional WhatsApp bot packed with automation, media tools, smart responses, group controls, and more! Experience blazing-fast performance, seamless interaction, and powerful features all in one bot. Customize, automate, and dominate!

࿇ Repository Highlights ࿇

🛠️ Developed by @𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯

Repo URL:
https://github.com/NjabuloJ/Njabulo-Jb
`;
    }
    
    menuMsg += `
@ sir Njabulo Jb 2025\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯",
                    body: "𝚊𝚕𝚠𝚊𝚢𝚜•••𝚘𝚗𝚕𝚒𝚗𝚎!",
                    thumbnailUrl: "https://files.catbox.moe/taqa8b.jpg",
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
