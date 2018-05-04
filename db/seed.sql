DROP DATABASE jumpstarter;
CREATE DATABASE jumpstarter;
\c jumpstarter;

CREATE TABLE users (
  id serial PRIMARY KEY,
  created_at timestamp with time zone DEFAULT current_timestamp,
  first_name varchar(50) NOT NULL,
  last_name varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  state varchar(50) NOT NULL,
  country varchar(50) NOT NULL,
  avatar_url varchar(255) NOT NULL
);

CREATE TABLE projects (
  id serial PRIMARY KEY,
  created_at timestamp with time zone DEFAULT current_timestamp,
  end_date timestamp with time zone,
  title varchar(50) NOT NULL,
  description text NOT NULL,
  category varchar(50) NOT NULL,
  image_url varchar(255) NOT NULL,
  creator_id integer references users(id)
);

CREATE TABLE projects_users (
  id serial PRIMARY KEY,
  created_at timestamp with time zone DEFAULT current_timestamp,
  pledge_amt decimal,
  project_id integer references projects(id),
  user_id integer references users(id)
);

CREATE TABLE faq (
  id serial PRIMARY KEY,
  created_at timestamp with time zone DEFAULT current_timestamp,
  title varchar (255) NOT NULL,
  description text NOT NULL,
  project_id integer references projects(id)
);

CREATE TABLE updates (
  id serial PRIMARY KEY,
  created_at  timestamp with time zone DEFAULT current_timestamp,
  title varchar(255) NOT NULL,
  description text NOT NULL,
  project_id integer references projects(id)
);

CREATE TABLE comments (
  id serial PRIMARY KEY,
  created_at timestamp with time zone DEFAULT current_timestamp,
  description text NOT NULL,
  project_id integer references projects(id),
  user_id integer references users(id)
);

CREATE TABLE reminders (
  id serial PRIMARY KEY,
  created_at timestamp with time zone DEFAULT current_timestamp,
  project_id integer references projects(id),
  user_id integer references users(id)
);