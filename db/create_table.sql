CREATE SEQUENCE public.monsters_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE SEQUENCE public.users_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

CREATE TABLE  IF NOT EXISTS users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    sub character varying(255) COLLATE pg_catalog."default" NOT NULL,
    nickname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE monsters
(
    id integer NOT NULL DEFAULT nextval('monsters_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    name_jp character varying(255) COLLATE pg_catalog."default",
    icon_url character varying(255) COLLATE pg_catalog."default",
    weak_fire character varying(255) COLLATE pg_catalog."default",
    weak_water character varying(255) COLLATE pg_catalog."default",
    weak_thunder character varying(255) COLLATE pg_catalog."default",
    weak_ice character varying(255) COLLATE pg_catalog."default",
    weak_dragon character varying(255) COLLATE pg_catalog."default",
    weak_poison character varying(255) COLLATE pg_catalog."default",
    weak_sleep character varying(255) COLLATE pg_catalog."default",
    weak_paralysis character varying(255) COLLATE pg_catalog."default",
    weak_blast character varying(255) COLLATE pg_catalog."default",
    weak_stun character varying(255) COLLATE pg_catalog."default",
    last_updated_user integer,
    last_updated_user_nickname character varying(255) COLLATE pg_catalog."default",
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    CONSTRAINT monsters_pkey PRIMARY KEY (id),
    CONSTRAINT monsters_last_updated_user_fkey FOREIGN KEY (last_updated_user)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS prefixes (
    server_id varchar(20) primary key,
    prefix varchar(4),
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);

