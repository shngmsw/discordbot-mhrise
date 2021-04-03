// Discord bot implements
const Discord = require("discord.js");
const client = new Discord.Client();
const Handler = require("./handler.js");
const Dispandar = require("./dispandar.js");
client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", async (msg) => {
  if (msg.author.bot) {
    return;
  }
  Handler.call(msg);
});

client.on("ready", message => {
  console.log(`Logged in as ${client.user.tag}!`);
});