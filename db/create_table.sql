CREATE TABLE IF NOT EXISTS monsters (
    id varchar(20) primary key
    ,name varchar(100)
    ,name_jp varchar(100)
    ,icon_url varchar(300)
    ,weak_fire varchar(2)
    ,weak_water varchar(2)
    ,weak_thunder varchar(2)
    ,weak_ice varchar(2)
    ,weak_dragon varchar(2)
    ,weak_poison varchar(2)
    ,weak_sleep varchar(2)
    ,weak_paralysis varchar(2)
    ,weak_blast varchar(2)
    ,weak_stun varchar(2)
);

CREATE TABLE IF NOT EXISTS prefixes (
    server_id varchar(20) primary key
    ,prefix varchar(4)
);
