const handleHelp = require("./help.js");
const common = require("./common.js");
const handleMonster = require("./monster.js");
const handlePrefix = require("./prefix.js");

module.exports = {
  call: call
};

async function call(msg) {

  var strCmd = msg.content.replace(/　/g, " ");
  const args = strCmd.split(" ");
  const command = args.shift().toLowerCase();
  const prefix = await common.getPrefix(msg.guild.id);
  switch (command) {
    case `${prefix}help`:
      handleHelp(msg);
      break;
    case `${prefix}prefix`:
      handlePrefix(msg);
      break;
    default:
      handleMonster(msg);
      break;
  }
}