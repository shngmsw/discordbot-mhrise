const insert = require("../db/fc_insert.js");
const getFC = require("../db/fc_select.js");
const Discord = require("discord.js");

module.exports = function handleFriendCode(msg) {
    if (msg.content.startsWith("fcadd")) {
        insertFriendCode(msg);
    } else if (msg.content.startsWith("fc")) {
        selectFriendCode(msg);
    }
}

async function selectFriendCode(msg) {
    var strCmd = msg.content.replace(/　/g, " ");
    const args = strCmd.split(" ");
    args.shift();
    // let id = args[0].replace('<@', '').replace('>','');
    let id = msg.mentions.users.first().id;
    let fc = await getFC(id, msg, args[0]);
    console.log("getFC:" + fc[0].code);
    if (fc[0] != null) {
        msg.channel.send(composeEmbed(msg.mentions.users.first(), fc[0].code, true));
        return;
    }
}

function composeEmbed(users, fc, isDatabase) {
    const embed = new Discord.MessageEmbed();
    embed.setDescription(fc);
    embed.setAuthor(
        name = users.username,
        iconURL = users.avatarURL()
    );
    if (!isDatabase) {
        embed.setFooter(
            text = "自己紹介チャンネルより引用"
        );
    }
    return embed;
}

async function insertFriendCode(msg) {
    var strCmd = msg.content.replace(/　/g, " ");
    const args = strCmd.split(" ");
    args.shift();
    // let id = args[0].replace('<@', '').replace('>','');
    let id = msg.author.id;
    let code = args[0];
    console.log("handle_fc:" + id + "/" + code);
    insert(id, code);
    msg.channel.send("覚えたでし！");
}