
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "name" (
    "id" SERIAL PRIMARY KEY,
    "player_name" VARCHAR (80) UNIQUE NOT NULL,
    "team_name" VARCHAR (1000) NOT NULL,
    "username_id" INT REFERENCES "user" NOT NULL
);

CREATE TABLE "court" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL
);

CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "date" VARCHAR (80) UNIQUE NOT NULL,
    "comments" VARCHAR (1000) NOT NULL,
    "court_id" INT REFERENCES "court" NOT NULL,
    "username_id" INT REFERENCES "user" NOT NULL
);

CREATE TABLE "stats" (
    "id" SERIAL PRIMARY KEY,
    "name_id" INT REFERENCES "name" NOT NULL,
    "game_id" INT REFERENCES "game" NOT NULL,
    "three_made" INTEGER UNIQUE NOT NULL,
    "three_missed" INTEGER  NOT NULL,
    "two_made" INTEGER  UNIQUE NOT NULL,
    "two_miss" INTEGER  UNIQUE NOT NULL,
    "total_points" INTEGER UNIQUE NOT NULL,
    "rebounds" INTEGER  UNIQUE NOT NULL,
    "assits" INTEGER UNIQUE NOT NULL,
    "blocks" INTEGER  UNIQUE NOT NULL,
    "steals" INTEGER  UNIQUE NOT NULL
);
