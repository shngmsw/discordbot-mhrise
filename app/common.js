module.exports = {
    isInteger: isInteger,
    getPrefix: getPrefix
}

function isInteger(x) {
    return Math.round(x) === x;
}

function getPrefix(serverId) {
    let prefix = "!!";
    return prefix;
}
