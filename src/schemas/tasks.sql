-- Table: public.tasks

-- DROP TABLE IF EXISTS public.tasks;

CREATE TABLE IF NOT EXISTS public.tasks
(
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,
    description character varying(250) COLLATE pg_catalog."default" NOT NULL,
    task_status character varying(100) COLLATE pg_catalog."default" NOT NULL,
    created_at character varying(100) COLLATE pg_catalog."default",
    updated_at character varying(100) COLLATE pg_catalog."default",
    username character varying(100) COLLATE pg_catalog."default",
    tags jsonb NOT NULL,
    "subTasks" jsonb NOT NULL,
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    CONSTRAINT tasks_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tasks
    OWNER to postgres;