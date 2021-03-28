const common = require("./common.js");
const getMonster = require("../db/monsters_select.js");
const URL = process.env.NETLIFY_URL;
module.exports = async function handleMonster(msg) {
    const prefix = await common.getPrefix(msg.guild.id);
    var strCmd = msg.content.replace(prefix, "");
    var name = strCmd;

    const monsters = await getMonster(name, name);
    for (var i = 0; i < monsters.length; i++) {
        var emb = {
            embed: {
                author: {
                    name: monsters[i].name_jp + monsters[i].name + "の弱点属性",
                },
                title: monsters[i].name_jp + monsters[i].name,
                description: `[モンスター一覧、編集や追加はこちら](${URL})`,
                color: 0xf02d7d,
                fields: [
                    { name: '火', value: common.replaceStar(monsters[i].weak_fire), inline: true },
                    { name: '水', value: common.replaceStar(monsters[i].weak_water), inline: true },
                    { name: '雷', value: common.replaceStar(monsters[i].weak_thunder), inline: true },
                    { name: '氷', value: common.replaceStar(monsters[i].weak_ice), inline: true },
                    { name: '龍', value: common.replaceStar(monsters[i].weak_dragon), inline: true },
                    { name: '毒', value: common.replaceStar(monsters[i].weak_poison), inline: true },
                    { name: '睡眠', value: common.replaceStar(monsters[i].weak_sleep), inline: true },
                    { name: '麻痺', value: common.replaceStar(monsters[i].weak_paralysis), inline: true },
                    { name: '爆破', value: common.replaceStar(monsters[i].weak_blast), inline: true },
                    { name: '気絶', value: common.replaceStar(monsters[i].weak_stun), inline: true }
                ],
                "image": {
                    "url": monsters[i].icon_url
                },
                "footer": {
                    text: ""
                }
            }
        }
        msg.channel.send(emb);
    }
};
