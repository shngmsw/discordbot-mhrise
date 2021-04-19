const weapons = {
    "0": "太刀",
    "1": "ライトボウガン",
    "2": "弓",
    "3": "大剣",
    "4": "片手剣",
    "5": "双剣",
    "6": "ハンマー",
    "7": "狩猟笛",
    "8": "チャージアックス",
    "9": "操虫棍",
    "10": "ヘビィボウガン",
    "11": "ガンランス",
    "12": "スラッシュアックス",
    "13": "ランス",
  };
  module.exports = function handleRandomWeapons(msg) {
    const weapon = weapons[Math.floor(Math.random() * 14)];
    msg.reply("**" + weapon + "**");
}