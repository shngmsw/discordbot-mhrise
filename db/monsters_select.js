var { getPostgresClient } = require('./db.js');

module.exports = async function getMonster(name, nameJP) {
    const db = await getPostgresClient();
    let result;
    try {
        const sql = "SELECT * FROM monsters WHERE name = $1 OR name_jp = $2";
        const params = [name, nameJP];

        result = await db.execute(sql, params);

    } finally {
        await db.release();
        return result;
    }
}