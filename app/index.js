// Discord bot implements
const Discord = require("discord.js");
const client = new Discord.Client();
const Handler = require("./handler.js");
const Dispandar = require("./dispandar.js");
const TTS = require("./tts/voice_bot_node.js");
const privateChat = require("./secretchat.js");
const handleStageInfo = require("./stageinfo.js");
const removeRookie = require("./rookie.js");
client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", async (msg) => {
  Handler.call(msg);
  Dispandar.dispand(msg);
  TTS.main(msg);
  removeRookie(msg);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
