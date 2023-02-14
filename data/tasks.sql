-- Table: public.tasks

-- DROP TABLE IF EXISTS public.tasks;

CREATE TABLE IF NOT EXISTS public.tasks
(
    title character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    task_status character varying COLLATE pg_catalog."default",
    tags character varying COLLATE pg_catalog."default",
    created_at character varying COLLATE pg_catalog."default",
    updated_at character varying COLLATE pg_catalog."default",
    subTasks character varying COLLATE pg_catalog."default",
    id SERIAL PRIMARY KEY
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tasks
    OWNER to postgres;