var { getPostgresClient } = require('./db.js');

module.exports = async function insert(monsters) {
    const db = await getPostgresClient();
    try {
        const sql = "INSERT INTO monsters (id, name, name_jp, icon_url, weak_fire, weak_water, weak_thunder, weak_ice, weak_dragon, weak_poison, weak_sleep, weak_paralysis, weak_blast, weak_stun) "
            + "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) "
            + "ON CONFLICT ON CONSTRAINT monsters_pkey "
            + "DO UPDATE SET code=$2";
        const params = monsters;

        await db.begin();
        await db.execute(sql, params);
        await db.commit();

    } catch (e) {
        await db.rollback();
        throw e;
    } finally {
        await db.release();
    }
}