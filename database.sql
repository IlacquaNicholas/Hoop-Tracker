
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "playerName" (
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
    "playerName_id" INT REFERENCES "playerName" NOT NULL,
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



const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'threeMade', headerName: '3pt Made', width: 130 },
    { field: 'threeMissed', headerName: '3pt Missed', width: 130 },
  
  ];

  const rows = [
    { id: 1, firstName: 'Nick', threeMade: 3, threeMissed: 4},
    { id: 2, firstName: 'Jared', threeMade: 3, threeMissed:5 },
    { id: 3, firstName: 'Mike', threeMade: 3, threeMissed: 5 },
  ];

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>