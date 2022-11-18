-- Table: public.subTasks

-- DROP TABLE IF EXISTS public.subTasks;

CREATE TABLE IF NOT EXISTS public.subTasks
(
    id integer NOT NULL DEFAULT nextval('posts_id_seq'::regclass),
    subTaskTitle character varying(100) COLLATE pg_catalog."default" NOT NULL,
    status character varying(100) COLLATE pg_catalog."default" NOT NULL,
    
    created_at character varying(100) COLLATE pg_catalog."default",
    updated_at character varying(100) COLLATE pg_catalog."default",
    username character varying(100) COLLATE pg_catalog."default",
    CONSTRAINT posts_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.subTasks
    OWNER to postgres;



-- Table: public.posts

-- DROP TABLE IF EXISTS public.posts;

CREATE TABLE IF NOT EXISTS public.posts
(
    id integer NOT NULL DEFAULT nextval('posts_id_seq'::regclass),
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description character varying(250) COLLATE pg_catalog."default" NOT NULL,
    task_status character varying(100) COLLATE pg_catalog."default" NOT NULL,
    created_at character varying(100) COLLATE pg_catalog."default",
    updated_at character varying(100) COLLATE pg_catalog."default",
    username character varying(100) COLLATE pg_catalog."default",
	tags character varying(250) COLLATE pg_catalog."default",
	list1 character varying(250) COLLATE pg_catalog."default",
	list2 character varying(250) COLLATE pg_catalog."default",
	list3 character varying(250) COLLATE pg_catalog."default",
    CONSTRAINT posts_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.posts
    OWNER to postgres;