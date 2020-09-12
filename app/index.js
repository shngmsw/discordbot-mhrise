// Discord bot implements
const Discord = require("discord.js");
const client = new Discord.Client();
const Handler = require('./handler.js');

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", async msg => {
  if (msg.author.bot) {
    if (msg.content.startsWith("/poll")) {
      if (msg.author.username === "ブキチ") {
        console.log(msg.author.username);
        msg.delete();
      }
    }
    // ステージ情報
    if (msg.content === "stageinfo") {
      Handler.call(msg);
      msg.delete();
    }
    return;
  }
  if (msg.content.match("ボーリング")) {
    msg.channel.send("```「ボウリング」とは、前方に正三角形に並べられた10本のピンと呼ばれる棒をめがけボールを転がし、倒れたピンの数によって得られる得点を競うスポーツでし。"
      + "専用施設のボウリング場に設置された細長いレーンの上で行われる屋内競技で、レーンの長さが約23m、ピンまでの距離は約18mで行われるのが一般的でし。"
      + "英語では “bowling” と書き、球を意味する “ball” ではなく、ラテン語で「泡」や「こぶ」を意味する “bowl” が語源とされているでし。"
      + "\n文部科学省は国語審議会で、球技を指す場合は「ボウリング」表記を用い、掘削を意味する「ボーリング」と区別することを推奨しているでし。```"
    );
  }
  Handler.call(msg);
});

client.on("guildMemberAdd", member => {
  const guild = member.guild;
  const roby = guild.channels.cache.find(channel => channel.id === "711489272066080831");
  const rules = guild.channels.cache.find(channel => channel.id === "711489271709827121");
  const channelDiscription = guild.channels.cache.find(channel => channel.id === "711489272066080828");
  const introduction = guild.channels.cache.find(channel => channel.id === "711489272066080832");

  guild.channels.cache.find(channel => channel.id === "711489272066080831")
    .send(
      `<@!${member.user.id}> たん、よろしくお願いします！\n` +
      `まずは ${rules} と ${channelDiscription} をよく読んでから${introduction} で自己紹介も兼ねて自分のフレコを貼ってください\n\n` +
      `${guild.name}のみんなが歓迎していますよ〜`)
    .then(sentMessage => sentMessage.react("👍"));

  });

client.on("guildMemberRemove", member => {
  const guild = member.guild;
  guild.channels.cache.
    find(channel => channel.id === "711489273475366924")
    .send(`${member.user.tag}さんが退部しました。`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});