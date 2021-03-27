var { getPostgresClient } = require('./db.js');

module.exports = async function getMonster(name, name_jp) {
    const db = await getPostgresClient();
    let result;
    try {
        const sql = "SELECT * FROM monsters WHERE name like '%$1%' OR name_jp like '%$2%'";
        const params = [name, name_jp];

        result = await db.execute(sql, params);

    } finally {
        await db.release();
        return result;
    }
}