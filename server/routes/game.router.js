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
            console.log('in POST /game', dbResult);
            res.sendStatus(201);
        })
        .catch((err)=>{
            console.log('in post /game err', err);
            res.sendStatus(500)
        })
    })
})

router.get ('/', (req, res)=>{
    const sqlText = `
    SELECT 
        "playerName"."player_name",
        "stats"."three_made",
        "stats"."three_missed",
        "stats"."two_made",
        "stats"."two_miss",
        "stats"."rebounds",
        "stats"."assists",
        "stats"."blocks",
        "stats"."steals", 
        "game"."date",
        "game"."comments",
        "court"."name"
    FROM "stats"
	    JOIN "game"
            ON "stats"."game_id"="game"."id"
        JOIN "court"
    	    ON "game"."court_id"="court"."id"
        JOIN "playerName"
    	    ON "stats"."playerName_id"="playerName"."id"
    WHERE "game"."id" = $1
    `;
    const sqlValues = [
        req.params.id
    ]
    pool.query(sqlText, sqlValues)
    .then((result)=>{
        console.log('In GET /game', result.rows);
        res.send(result.rows)
    })
    .catch((dbErr) => {
        console.log('In GET /game', dbErr);
        res.sendStatus(500)
    })
})


// router.put ('/', (req, res)=>{
//     console.log('In Put /stats', req.body);
//     console.log('In Put /stats', req.params);
//     const statsId = req.params.id;
//     const threeMade = req.body.three_made;
//     const threeMissed = req.body.three_missed;
//     const rebounds = req.body.rebounds;
//     const sqlText = `
//     UPDATE "stats"
//     SET
//         "three_made"=$1, 
//         "three_missed"=$2, 
//         "rebounds"=$3,
//     WHERE "id" = $4
//     `;
//     const sqlValues = [
//         threeMade, 
//         threeMissed, 
//         rebounds, 
//         statsId
//     ]
//     pool.query(sqlText, sqlValues)
//     .then ((dbRes)=>{
//         res.sendStatus(201)
//     })
//     .catch((dbErr)=>{
//         console.log('In Put Error', dbErr);
//         res.sendStatus(500)
//     })    
// })



module.exports = router;