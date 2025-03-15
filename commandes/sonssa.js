const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
zokou({
  zokou({
  'nomCom': "song2",
  'categorie': "Download",
  'reaction': '💿'
}, async (_0x1edfc4, _0x1eac3a, _0x566003) => {
  const {
    ms: _0x3c5056,
    repondre: _0x29c04a,
    arg: _0xd269b3
  } = _0x566003;
  if (!_0xd269b3[0]) {
    _0x29c04a("Please insert a song name.");
    return;
  }
  try {
    let _0x3f3369 = _0xd269b3.join(" ");
    let _0x3dc8e2 = [];
    const _0x27469b = await yts(_0x3f3369);
    _0x3dc8e2 = _0x27469b.videos;
    if (_0x3dc8e2 && _0x3dc8e2.length > 0) {
      const _0x573538 = _0x3dc8e2[0].url;
      const _0x434f90 = await fetch("https://api.giftedtech.web.id/api/download/dlmp3?url=$" + encodeURIComponent(_0x573538) + "&apikey=" + "gifted");
      const _0x3bdb70 = await _0x434f90.json();
      if (_0x3bdb70.status === 200 && _0x3bdb70.success) {
        const _0x50496d = _0x3bdb70.result.download_url;
        const _0x1a6ee9 = {
          'image': {
            'url': _0x3dc8e2[0].thumbnail
          },
          caption': "♻️𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 ♻️\n\n📌  *Title:* " + _0x322f75[0].title + "\n🔍 *Quality:* mp3 (320kbps)\n⏳ *Duration:* " + _0x322f75[0].timestamp + "\n👁️ *Viewers:* " + _0x322f75[0].views + "\n🎭 *Uploaded:* " + _0x322f75[0].ago + "\n⏳ *Artist:* " + _0x322f75[0].author.name + "\n\n⦿ *Direct YtLink:* " + _0x165324 + "\n\nᴛᴀᴘ ᴏɴ ᴛʜᴇ ʟɪɴᴋ ʙᴇʟᴏᴡ ᴛᴏ ғᴏʟʟᴏᴡ ᴏᴜʀ ᴄʜᴀɴɴᴇʟ\n> https://shorturl.at/q8ZuS \n➠ᴍᴀᴅᴇ ʙʏ ɴᴊᴀʙᴜʟᴏ ᴊʙ2025"
        };
        await _0x1eac3a.sendMessage(_0x1edfc4, _0x1a6ee9, {
          'quoted': _0x3c5056
        });
        await _0x1eac3a.sendMessage(_0x1edfc4, {
          'document': {
            'url': _0x50496d
          },
          'mimetype': "audio/mp4"
        }, {
          'quoted': _0x3c5056
        });
        _0x29c04a("*enjoy music is life my friend*");
      } else {
        _0x29c04a("Failed to download audio. Please try again later.");
      }
    } else {
      _0x29c04a("No audio found.");
    }
  } catch (_0x1b302b) {
    console.error("Error from API:", _0x1b302b);
    _0x29c04a("An error occurred while searching or downloading the audio." + _0x1b302b);
  }
});
