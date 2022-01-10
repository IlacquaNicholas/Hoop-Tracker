const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.post('/', (req, res)=>{
    console.log('in POST /stats', req.body);
    const gameData = `
    INSERT INTO "game" ("date", "comments", "court_id", "username_id")
    VALUES ($1, $2, $3, $4)
    RETURNING "id";
    `
    pool.query(gameData, [req.body.date, req.body.comments, req.body.court_id, req.user.id])
    .then((result)=>{
        console.log('New Game Id:', result.rows[0].id);
        const createdGameId = result.rows[0].id;
        const insertStatData = `
        INSERT INTO "stats"
        ("playerName_id", "game_id", "three_made", "three_missed", "two_made", "two_miss", "rebounds", "assists", "blocks", "steals")
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
        `;
        const statData = req.body;
        const sqlValues = [
            statData.playerName_id,
            createdGameId,
            statData.three_made, 
            statData.three_missed,
            statData.two_made,
            statData.two_miss, 
            statData.rebounds,
            statData.assists,
            statData.blocks,
            statData.steals
        ];
        pool.query(insertStatData,sqlValues)
        .then ((dbResult)=>{
            console.log('in POST /stats', dbResult);
            res.sendStatus(201);
        })
        .catch((err)=>{
            console.log('in post /stats err', err);
            res.sendStatus(500)
        })
    })
})


//This is to grab all the all the stats saga is fetchGameStats sags
//Also the reducer is SET_DISPLAY_STATS
router.get('/:id', (req,res) =>{
    const sqlText = `
    SELECT 
        "stats"."game_id",
        "stats"."three_made",
        "stats"."three_missed",
        "stats"."two_made",
        "stats"."two_miss",
        "stats"."rebounds",
        "stats"."assists",
        "stats"."blocks",
        "stats"."steals", 
        "court"."name",
        "game"."date",
        "game"."comments",
        "playerName"."player_name"
    FROM "stats"
	    JOIN "game"
            ON "stats"."game_id"="game"."id"
        JOIN "court"
    	    ON "game"."court_id"="court"."id"
        JOIN "playerName"
    	    ON "stats"."playerName_id"="playerName"."id"
    WHERE "game"."id" = $1;
    `;
    const sqlValues = [
        req.params.id
    ]
    pool.query(sqlText, sqlValues)
    .then ((dbRes)=>{
        res.send(dbRes.rows[0])
    })
    .catch((dbErr)=>{
        console.log('in GET edit /stats err', dbErr);
        res.sendStatus(500)
    })
});


//this ot route is to help edit a players stats
router.put ('/:id', (req, res)=>{
    const sqlText = `
    UPDATE "stats"
    SET
        "three_made"=$1, 
        "three_missed"=$2,
        "two_made"=$3,
        "two_miss"=$4,
        "rebounds"=$5,
        "assists"=$6,
        "blocks"=$7,
        "steals"=$8, 
    WHERE "id" = $9
    `;
    const sqlValues = [
        req.body.three_made,
        req.body.three_missed,
        req.body.two_made,
        req.body.two_miss,
        req.body.rebounds,
        req.body.assists,
        req.body.blocks,
        req.body.steals,
        req.params.id
    ]
    pool.query(sqlText, sqlValues)
    .then ((dbRes)=>{
        res.sendStatus(200)
    })
    .catch((dbErr)=>{
        console.log('In Put Error', dbErr);
        res.sendStatus(500)
    })    
})



module.exports = router;