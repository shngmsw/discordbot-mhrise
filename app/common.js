const getPrefixes = require('../db/prefixes_select.js');
const DEFAULT_PREFIX = '!!';
module.exports = {
    isInteger: isInteger,
    getPrefix: getPrefix,
    replaceStar: replaceStar
}

function isInteger(x) {
    return Math.round(x) === x;
}

async function getPrefix(serverId) {
    let prefix = DEFAULT_PREFIX;
    const serverPrefix = await getPrefixes(serverId);
    if (serverPrefix[0] != null) {
        prefix = serverPrefix[0].prefix;
    }
    return prefix;
}

function replaceStar(num) {
    console.log(num)
    if (num == 0 || !num ) {
      return "❌";
    }
    return Array(1 + Number(num)).join('⭐');
  }