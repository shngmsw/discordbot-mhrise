const getPrefixes = require('../db/prefixes_select.js');
const DEFAULT_PREFIX = '!!';
module.exports = {
    isInteger: isInteger,
    getPrefix: getPrefix
}

function isInteger(x) {
    return Math.round(x) === x;
}

async function getPrefix(serverId) {
    let prefix = DEFAULT_PREFIX;
    const serverPrefix = await getPrefixes(serverId);
    if (serverPrefix[0] != null) {
        prefix = serverPrefix.prefix;
    }
    return prefix;
}
