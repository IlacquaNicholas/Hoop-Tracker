CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "playerName" (
    "id" SERIAL PRIMARY KEY,
    "player_name" VARCHAR (80) NOT NULL,
    "team_name" VARCHAR (1000) NOT NULL,
    "username_id" INT REFERENCES "user" (id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE "court" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL
);

CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "date" VARCHAR (80) NOT NULL,
    "comments" VARCHAR (1000) NOT NULL,
    "court_id" INT REFERENCES "court" (id) ON DELETE CASCADE  NOT NULL,
    "username_id" INT REFERENCES "user" (id) ON DELETE CASCADE NOT NULL
);

CREATE TABLE "stats" (
    "id" SERIAL PRIMARY KEY,
    "playerName_id" INT REFERENCES "playerName" (id) ON DELETE CASCADE NOT NULL,
    "game_id" INT REFERENCES "game" (id) ON DELETE CASCADE NOT NULL,
    "three_made" INTEGER NOT NULL,
    "three_missed" INTEGER  NOT NULL,
    "two_made" INTEGER NOT NULL,
    "two_miss" INTEGER  NOT NULL,
    "total_points" INTEGER,
    "rebounds" INTEGER NOT NULL,
    "assists" INTEGER NOT NULL,
    "blocks" INTEGER  NOT NULL,
    "steals" INTEGER  NOT NULL
);


INSERT INTO "court" ("name") 
VALUES ('RV Middle School Gym 1'),
('RV Middle School Gym 2'),
('C.P. West'),('C.P. East')




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