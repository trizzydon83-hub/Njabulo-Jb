const {
  zokou
} = require("../framework/zokou");
const axios = require("axios");
const ytSearch = require("yt-search");
const conf = require(__dirname + "/../set");
zokou({
  'nomCom': "play2",
  'aliases': ["song", "playdoc", "audio", "mp3"],
  'categorie': "Search",
  'reaction': "⚔️"
}, async (_0x2bfdef, _0x539240, _0x2e0500) => {
  const {
    arg: _0x4dc2f0,
    ms: _0x23f171,
    repondre: _0xa189ab
  } = _0x2e0500;
  if (!_0x4dc2f0[0]) {
    return _0xa189ab("Please provide a video name.");
  }
  const _0x21387f = _0x4dc2f0.join(" ");
  try {
    const _0x1b1f38 = await ytSearch(_0x21387f);
    if (!_0x1b1f38 || !_0x1b1f38.videos.length) {
      return _0xa189ab("No video found for the specified query.");
    }
    const _0x48a96b = _0x1b1f38.videos[0];
    const _0x2da2f3 = _0x48a96b.url;
    const _0x34d921 = async _0x44dc78 => {
      try {
        const _0x130eff = await axios.get(_0x44dc78);
        return _0x130eff.data;
      } catch (_0x25b98b) {
        console.error("Error fetching data from API:", _0x25b98b);
        return {
          'success': false
        };
      }
    };
    const _0x5f4e4f = ["https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x2da2f3), "https://apis.davidcyriltech.my.id/youtube/mp3?url=" + encodeURIComponent(_0x2da2f3), "https://www.dark-yasiya-api.site/download/ytmp3?url=" + encodeURIComponent(_0x2da2f3), "https://api.giftedtech.web.id/api/download/dlmp3?url=" + encodeURIComponent(_0x2da2f3) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/audio?url=" + encodeURIComponent(_0x2da2f3)];
    let _0x2e54aa;
    for (const _0x3fbf2c of _0x5f4e4f) {
      _0x2e54aa = await _0x34d921(_0x3fbf2c);
      if (_0x2e54aa && _0x2e54aa.success) {
        break;
      }
    }
    if (!_0x2e54aa || !_0x2e54aa.success) {
      return _0xa189ab("Failed to retrieve download URL from all sources. Please try again later.");
    }
    const _0x28e8a6 = _0x2e54aa.result.download_url;
    const _0x1a4c2a = _0x2e54aa.result;
    const _0x40d585 = [{
      'audio': {
        'url': _0x28e8a6
      },
      caption: `\n*♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️*\n
📌 *Title:* ${songTitle} 
🎭 *Quality:* High
⏳ *Duration:* ${firstVideo.timestamp}

ᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ
https://shorturl.at/q8ZuS

➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ 2025`,
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯"
            body: "Faste bot"
            mediaType: 1,
            sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T"
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
        }
      }
    }, {
      'document': {
        'url': _0x28e8a6
      },
      caption: `\n*♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️*\n
📌 *Title:* ${songTitle} 
🎭 *Quality:* High
⏳ *Duration:* ${firstVideo.timestamp}

ᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ
https://shorturl.at/q8ZuS

➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ 2025`,
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯"
            body: "Faste bot"
            mediaType: 1,
            sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T"
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
        }
      }
    }];
    for (const _0xc62007 of _0x40d585) {
      await _0x539240.sendMessage(_0x2bfdef, _0xc62007, {
        'quoted': _0x23f171
      });
    }
  } catch (_0x3b8949) {
    console.error("Error during download process:", _0x3b8949);
    return _0xa189ab("Download failed due to an error: " + (_0x3b8949.message || _0x3b8949));
  }
});
zokou({
  'nomCom': "video2",
  'aliases': ["videodoc", "film", "mp4"],
  'categorie': "Search",
  'reaction': '⚔️'
}, async (_0x189099, _0x4303ca, _0x2ae918) => {
  const {
    arg: _0x5eb03f,
    ms: _0x4d4220,
    repondre: _0x396e62
  } = _0x2ae918;
  if (!_0x5eb03f[0]) {
    return _0x396e62("Please provide a video name.");
  }
  const _0x3ffe55 = _0x5eb03f.join(" ");
  try {
    const _0x248783 = await ytSearch(_0x3ffe55);
    if (!_0x248783 || !_0x248783.videos.length) {
      return _0x396e62("No video found for the specified query.");
    }
    const _0x3e0078 = _0x248783.videos[0];
    const _0x3c7710 = _0x3e0078.url;
    const _0x2c6e02 = async _0x10ce2a => {
      try {
        const _0x59c185 = await axios.get(_0x10ce2a);
        return _0x59c185.data;
      } catch (_0x4a5d42) {
        console.error("Error fetching data from API:", _0x4a5d42);
        return {
          'success': false
        };
      }
    };
    const _0x8451c = ["https://api-rin-tohsaka.vercel.app/download/ytmp4?url=" + encodeURIComponent(_0x3c7710), "https://apis.davidcyriltech.my.id/download/ytmp4?url=" + encodeURIComponent(_0x3c7710), "https://www.dark-yasiya-api.site/download/ytmp4?url=" + encodeURIComponent(_0x3c7710), "https://api.giftedtech.web.id/api/download/dlmp4?url=" + encodeURIComponent(_0x3c7710) + "&apikey=gifted-md", "https://api.dreaded.site/api/ytdl/video?url=" + encodeURIComponent(_0x3c7710)];
    let _0x5bf064;
    for (const _0x501df9 of _0x8451c) {
      _0x5bf064 = await _0x2c6e02(_0x501df9);
      if (_0x5bf064 && _0x5bf064.success) {
        break;
      }
    }
    if (!_0x5bf064 || !_0x5bf064.success) {
      return _0x396e62("Failed to retrieve download URL from all sources. Please try again later.");
    }
    const _0x58c9ac = _0x5bf064.result.download_url;
    const _0x3271ee = _0x5bf064.result;
    const _0x866a54 = [{
      'video': {
        'url': _0x58c9ac
      },
      caption: `\n*♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️*\n
📌 *Title:* ${songTitle} 
🎭 *Quality:* High
⏳ *Duration:* ${firstVideo.timestamp}

ᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ
https://shorturl.at/q8ZuS

➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ 2025`,
        mimetype: 'video/mp4',
        contextInfo: {
          externalAdReply: {
            title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯"
            body: "Faste bot"
            mediaType: 1,
            sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T"
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
        }
      }
    }, {
      'document': {
        'url': _0x58c9ac
      },
      caption: `\n*♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️*\n
📌 *Title:* ${songTitle} 
🎭 *Quality:* High
⏳ *Duration:* ${firstVideo.timestamp}

ᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ
https://shorturl.at/q8ZuS

➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ 2025`,
        mimetype: 'audio/mp4',
        contextInfo: {
          externalAdReply: {
            title: "@𝘀𝗶𝗿 𝗡𝗷𝗮𝗯𝘂𝗹𝗼 𝗝𝗯"
            body: "Faste bot"
            mediaType: 1,
            sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T"
            thumbnailUrl: firstVideo.thumbnail,
            renderLargerThumbnail: false,
            showAdAttribution: true,
        }
      }
    }];
    for (const _0x5ddeef of _0x866a54) {
      await _0x4303ca.sendMessage(_0x189099, _0x5ddeef, {
        'quoted': _0x4d4220
      });
    }
  } catch (_0x2a28c2) {
    console.error("Error during download process:", _0x2a28c2);
    return _0x396e62("Download failed due to an error: " + (_0x2a28c2.message || _0x2a28c2));
  }
});
