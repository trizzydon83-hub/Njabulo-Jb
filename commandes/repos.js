'use strict';

Object.defineProperty(exports, "__esModule", {
  'value': true
});
const {
  zokou
} = require("../framework/zokou");
zokou({
  'nomCom': "repos",
  'reaction': '⚔️',
  'categorie': "github",
  'nomFichier': __filename
}, async (_0x3258e7, _0x4c4732, _0x13b70c) => {
  console.log("Commande saisie !!!s");
  await _0x4c4732.sendMessage(_0x3258e7, {
    'text': "Hello 👋https://github.com/NjabuloJ/Njabulo-Jb\n\nClick on the button below to join the  WhatsApp Group",
    'contextInfo': {
      'externalAdReply': {
        'thumbnailUrl': "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T"
        'sourceUrl': "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
        'mediaType': 0x1,
        'mediaUrl': "https://files.catbox.moe/hlazmb.jpg",
        'title': "Join Our WhatsApp Group",
        'body': "Click to join the official Njabulo JB WhatsApp group!"
      }
    }
  });
