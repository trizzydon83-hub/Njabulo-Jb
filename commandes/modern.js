const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "modern-Logo", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
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
*Modern-Logo*
- .birthday1
- .birthday2
- .birthday3
- .birthday4
- .birthday5
- .birthday6
- .birthday7
- .comic
- .zodiac
- .underwater2
- .glow
- .avatargold
- .bokeh
- .firework
- .gaming
- .signature
- .luxury
- .dragonfire
- .queencard
- .graffiticolor
- .tattoo
- .pentakill
- .halloween1
- .horror
- .halloween2
- .women's-day
- .valentine
- .neonlight
- .assassin
- .foggy
- .summer
- .light
- .moderngold
- .cartoonstyle
- .galaxy
- .hacker
- .dragonball
- .naruto
- .didong
- .purple
- .gold
- .arena
- .incandescent
- .christmas
- .frost
- .christmas
- .mechanical`;
    }
    
    menuMsg += `
> @𝚁𝙰𝙷𝙼𝙰𝙽𝙸 𝙼𝙳\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "𝚁𝙰𝙷𝙼𝙰𝙽𝙸 𝙼𝙳",
                    body: "Tap here my friend join channel update",
                    thumbnailUrl: "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
                    sourceUrl: "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
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
