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
  -- projects_created_count integer DEFAULT 0 -- instead count creator_id from projects
  -- total_pledge_amt decimal DEFAULT 0, -- instead join on projects_users and sum
  -- pledges_count decimal DEFAULT 0, -- instead join on projects_users and count
);

CREATE TABLE projects (
  id serial PRIMARY KEY,
  creator_id integer references users(id),
  created_at timestamp with time zone DEFAULT current_timestamp,
  end_date timestamp with time zone,
  title varchar(50) NOT NULL,
  description text NOT NULL,
  category varchar(50) NOT NULL,
  city varchar(50) NOT NULL,
  state varchar(50) NOT NULL,
  country varchar(50) NOT NULL,
  image_url varchar(255) NOT NULL,
  faqs_count integer DEFAULT 0,
  updates_count integer DEFAULT 0,
  comments_count integer DEFAULT 0,
  pledges_count integer DEFAULT 0,
  total_pledge_amt decimal DEFAULT 0,
  goal_amt decimal DEFAULT 0,
  all_or_nothing boolean DEFAULT false
);

CREATE TABLE projects_users (
  id serial PRIMARY KEY,
  created_at timestamp with time zone DEFAULT current_timestamp,
  pledge_amt decimal,
  project_id integer references projects(id),
  user_id integer references users(id)
);

-- CREATE TABLE faqs (
--   id serial PRIMARY KEY,
--   created_at timestamp with time zone DEFAULT current_timestamp,
--   title varchar (255) NOT NULL,
--   description text NOT NULL,
--   project_id integer references projects(id)
-- );

-- CREATE TABLE updates (
--   id serial PRIMARY KEY,
--   created_at  timestamp with time zone DEFAULT current_timestamp,
--   title varchar(255) NOT NULL,
--   description text NOT NULL,
--   project_id integer references projects(id)
-- );

-- CREATE TABLE comments (
--   id serial PRIMARY KEY,
--   created_at timestamp with time zone DEFAULT current_timestamp,
--   description text NOT NULL,
--   project_id integer references projects(id),
--   user_id integer references users(id)
-- );

\c postgres;