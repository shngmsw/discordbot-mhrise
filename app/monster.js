const common = require("./common.js");
module.exports = function handleMonster(msg) {
    const prefix = common.getPrefix(msg.guild.id);
    var strCmd = msg.content.replace(prefix, "");
    var name = strCmd;
    var fs = require("fs");

    const monsters = JSON.parse(fs.readFileSync('./mhwi.json', 'utf8'));// TODO getFromDB
    for (var i = 0; i < monsters.length; i++) {
        if (monsters[i].names.JP.indexOf(name) >= 0) {
            var emb = {
                embed: {
                    author: {
                        name: monsters[i].names.JP + "の弱点属性",
                    },
                    color: 0xf02d7d,
                    fields: [
                        { name: '火', value: replaceStar(monsters[i].weak.fire), inline: true },
                        { name: '水', value: replaceStar(monsters[i].weak.water), inline: true },
                        { name: '雷', value: replaceStar(monsters[i].weak.thunder), inline: true },
                        { name: '氷', value: replaceStar(monsters[i].weak.ice), inline: true },
                        { name: '龍', value: replaceStar(monsters[i].weak.dragon), inline: true },
                        { name: '毒', value: replaceStar(monsters[i].weak.poison), inline: true },
                        { name: '眠り', value: replaceStar(monsters[i].weak.sleep), inline: true },
                        { name: '麻痺', value: replaceStar(monsters[i].weak.paralysis), inline: true },
                        { name: '爆破', value: replaceStar(monsters[i].weak.blast), inline: true },
                        { name: '気絶', value: replaceStar(monsters[i].weak.stun), inline: true }
                    ],
                    "image": {
                        "url": getImgUrl(monsters[i].icon)
                    }
                }
            }
            msg.channel.send(emb);

        }
    };
}