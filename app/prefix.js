const common = require("./common.js");
const prefixes_insert = require("../db/prefixes_insert.js");
module.exports = async function handlePrefix(msg) {
    var strCmd = msg.content.replace(/　/g, ' ');
    strCmd = strCmd.replace('  ', ' ');
    const args = strCmd.split(' ');
    args.shift();
    const newPrefix = args[0];
    await prefixes_insert.insert(msg.guild.id, newPrefix);
    msg.channel.send("prefixを`" + newPrefix + "`に変更しました。");
}