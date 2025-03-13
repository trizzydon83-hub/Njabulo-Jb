const { zokou } = require('../framework/zokou');
const gis = require('g-i-s');
const axios = require('axios');
const conf = require(__dirname + '/../set');
zokou({
  nomCom: "imgss",
  aliases: ["image", "images"],
  categorie: "mod-image",
  reaction: "📷"
}, async (dest, zk, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Which image?');
    return;
  }

  const searchTerm = arg.join(" ");
  gis(searchTerm, (error, results) => sendImage(error, results));

  function sendImage(error, results) {
    if (error) {
      repondre("Oops, an error occurred.");
      return;
    }

    if (!results || results.length === 0) {
      repondre("No images found.");
      return;
    }

    for (let i = 0; i < Math.min(results.length, 5); i++) {
      zk.sendMessage(dest, {
        image: { url: results[i].url },
        caption: `*Downloaded by* @𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯`,
        contextInfo: {
          externalAdReply: {
            title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯",
            body: `Here's the image you searched for: ${searchTerm}`,
            thumbnailUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T"
            sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T"
            mediaType: 1,
            showAdAttribution: true
          }
        }
      }, { quoted: ms });
    }
  }
});
    
