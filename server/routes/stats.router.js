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
        ("playerName_id", "game_id", "three_made", "three_missed", "two_made", "two_miss","total_points", "rebounds", "assists", "blocks", "steals")
        VALUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
        `;
        const statData = req.body;
        const sqlValues = [
            statData.playerName_id,
            createdGameId,
            statData.three_made, 
            statData.three_missed,
            statData.two_made,
            statData.two_miss, 
            statData.total_points,
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
    console.log('#####', req.params.id);
    
    const sqlText = `
    SELECT 
        "stats"."game_id",
        "stats"."three_made",
        "stats"."three_missed",
        "stats"."two_made",
        "stats"."two_miss",
        "stats"."total_points",
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
        WHERE "game"."id"=$1;
    `;
    const sqlValues = [
        req.params.id
    ]
    pool.query(sqlText, sqlValues)
    .then ((dbRes)=>{
        console.log('dbRes.rows', dbRes.rows[0]);
        
        res.send(dbRes.rows[0])
    })
    .catch((dbErr)=>{
        console.log('in GET edit /stats err', dbErr);
        res.sendStatus(500)
    })
});
module.exports = router;