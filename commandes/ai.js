const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);

zokou({ nomCom: "menuai", categorie: "Menu" }, async (dest, zk, commandeOptions) => {
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
*┈「 𝐀𝐈 」┈*
╭┈┈┈┈┈┈┈┈┈┈┈⊷
┊▸ 1.  L𝚞𝚌𝚔𝚊
┊▸ 2. 1917
┊▸ 3. 𝚊𝚍
┊▸ 4. 𝚊𝚕𝚎𝚛𝚝
┊▸ 5. 𝚋𝚎𝚊𝚞𝚝𝚒𝚏𝚢
┊▸ 6. 𝚋𝚒𝚍𝚎𝚗
┊▸ 7. 𝚋𝚒𝚗𝚐
┊▸ 8. 𝚋𝚒𝚗𝚐2
┊▸ 9. 𝚋𝚕𝚞𝚛
┊▸ 10. 𝚋𝚛𝚊𝚒𝚗𝚜𝚑𝚘𝚙
┊▸ 11. 𝚌𝚊𝚛𝚝𝚘𝚘𝚗
┊▸ 12. 𝚌𝚊𝚞𝚝𝚒𝚘𝚗
┊▸ 13. 𝚌𝚑𝚊𝚝
┊▸ 14. 𝚌𝚕𝚘𝚠𝚗
┊▸ 15. 𝚍𝚛𝚊𝚔𝚎
┊▸ 16. 𝚍𝚛𝚒𝚙
┊▸ 17. 𝚎𝚡𝚝𝚛𝚊𝚌𝚝
┊▸ 18. 𝚐𝚎𝚖𝚒𝚗𝚒
┊▸ 19. 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚎
┊▸ 20. 𝚐𝚏𝚡
┊▸ 21. 𝚐𝚏𝚡2
┊▸ 22. 𝚐𝚏𝚡3
┊▸ 23. 𝚐𝚏𝚡4
┊▸ 24. 𝚐𝚏𝚡5
┊▸ 25. 𝚐𝚏𝚡6
┊▸ 26. 𝚐𝚙𝚝7
┊▸ 27. 𝚐𝚝𝚊
┊▸ 28. 𝚒𝚕𝚊𝚖𝚊
┊▸ 29. 𝚕𝚞𝚕𝚌𝚊𝚝
┊▸ 30. 𝚖𝚎𝚖𝚎
┊▸ 31. 𝚗𝚎𝚠𝚜
┊▸ 32. 𝚗𝚘𝚔𝚒𝚊
┊▸ 33. 𝚘𝚘𝚐𝚠𝚊𝚢
┊▸ 34. 𝚙𝚎𝚝
┊▸ 35. 𝚙𝚘𝚘𝚑
┊▸ 36. 𝚜𝚊𝚍𝚌𝚊𝚝
┊▸ 37. 𝚝𝚎𝚡𝚝2𝚙𝚛𝚘𝚖𝚙𝚝
┊▸ 38. 𝚞𝚗𝚍𝚎𝚛𝚠𝚊𝚝𝚎𝚛
┊▸ 39. 𝚞𝚗𝚏𝚘𝚛𝚐𝚒𝚟𝚊𝚋𝚕𝚎
┊▸ 40. 𝚠𝚊𝚝𝚎𝚛𝚌𝚘𝚕𝚘𝚛
┊▸ 41. 🤔
╰┈┈┈┈┈┈┈┈┈┈┈⊷
`;
    }
    
    menuMsg += `
@ sir Njabulo Jb 2025`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "sir Njabulo Jb",
                    body: "menu AI",
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
