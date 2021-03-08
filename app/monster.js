const common = require("./common.js");
const getMonster = require("../db/monsters_select.js");

module.exports = async function handleMonster(msg) {
    const prefix = common.getPrefix(msg.guild.id);
    var strCmd = msg.content.replace(prefix, "");
    var name = strCmd;

    const monsters = await getMonster(name);
    for (var i = 0; i < monsters.length; i++) {
        var emb = {
            embed: {
                author: {
                    name: monsters[i].name_jp + monsters[i].name + "の弱点属性",
                },
                color: 0xf02d7d,
                fields: [
                    { name: '火', value: replaceStar(monsters[i].weak_fire), inline: true },
                    { name: '水', value: replaceStar(monsters[i].weak_water), inline: true },
                    { name: '雷', value: replaceStar(monsters[i].weak_thunder), inline: true },
                    { name: '氷', value: replaceStar(monsters[i].weak_ice), inline: true },
                    { name: '龍', value: replaceStar(monsters[i].weak_dragon), inline: true },
                    { name: '毒', value: replaceStar(monsters[i].weak_poison), inline: true },
                    { name: '眠り', value: replaceStar(monsters[i].weak_sleep), inline: true },
                    { name: '麻痺', value: replaceStar(monsters[i].weak_paralysis), inline: true },
                    { name: '爆破', value: replaceStar(monsters[i].weak_blast), inline: true },
                    { name: '気絶', value: replaceStar(monsters[i].weak_stun), inline: true }
                ],
                "image": {
                    "url": getImgUrl(monsters[i].icon_url)
                }
            }
        }
        msg.channel.send(emb);
    }
};
