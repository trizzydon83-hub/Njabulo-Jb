const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  'nomCom': "play2",
  'categorie': "Download",
  'reaction': '🎶'
}, async (_0x3bb19c, _0x1b59c4, _0x1ac9b2) => {
  const {
    ms: _0x57f480,
    repondre: _0x1ae903,
    arg: _0x546fcc
  } = _0x1ac9b2;
  if (!_0x546fcc[0]) {
    _0x1ae903("Please insert a song name.");
    return;
  }
  try {
    let _0x5cd887 = _0x546fcc.join(" ");
    let _0x322f75 = [];
    const _0x1b000a = await yts(_0x5cd887);
    _0x322f75 = _0x1b000a.videos;
    if (_0x322f75 && _0x322f75.length > 0) {
      const _0x165324 = _0x322f75[0].url;
      const _0xd95cfd = await fetch("https://apis.davidcyriltech.my.id/youtube/mp3?url=" + encodeURIComponent(_0x165324) + "&apikey=" + "gifted");
      const _0x257cbf = await _0xd95cfd.json();
      if (_0x257cbf.status === 200 && _0x257cbf.success) {
        const _0x53c40a = _0x257cbf.result.download_url;
        const _0xd636ce = {
          'image': {
            'url': _0x322f75[0].thumbnail
          },
          'caption': "♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️\n\n📌  *Title:* " + _0x322f75[0].title + "\n🔍 *Quality:* mp3 (320kbps)\n⏳ *Duration:* " + _0x322f75[0].timestamp + "\n👁️ *Viewers:* " + _0x322f75[0].views + "\n🎭 *Uploaded:* " + _0x322f75[0].ago + "\n⏳ *Artist:* " + _0x322f75[0].author.name + "\n\n⦿ *Direct YtLink:* " + _0x165324 + "\n\nᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ\n> https://shorturl.at/q8ZuS \n➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ2025"
        };
        await _0x1b59c4.sendMessage(_0x3bb19c, _0xd636ce, {
          'quoted': _0x57f480
        });
        await _0x1b59c4.sendMessage(_0x3bb19c, {
          'audio': {
            'url': _0x53c40a
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x57f480
        });
        _0x1ae903("*enjoy music is life my friend*...");
      } else {
        _0x1ae903("Failed to download audio. Please try again later.");
      }
    } else {
      _0x1ae903("No audio found.");
    }
  } catch (_0x1eb46b) {
    console.error("Error from API:", _0x1eb46b);
    _0x1ae903("An error occurred while searching or downloading the audio." + _0x1eb46b);
  }
});
