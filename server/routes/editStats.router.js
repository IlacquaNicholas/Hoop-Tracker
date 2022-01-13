const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:id', (req, res)=>{
    console.log('@@@@@@ in GET/editStats', req.params.id);
    
    const sqlText = `
    SELECT 
        "stats"."three_made",
        "stats"."three_missed",
        "stats"."two_made",
        "stats"."two_miss",
        "stats"."rebounds",
        "stats"."total_points",
        "stats"."assists",
        "stats"."blocks",
        "stats"."steals",
        "game"."comments"
    FROM "stats"
        JOIN "game"
            ON "stats"."game_id"="game"."id"
        WHERE "game_id"=$1;
    `;
    const sqlValues = [
        req.params.id
    ]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        console.log('in Get /editStats dbRes.rows', dbRes.rows);
        res.send(dbRes.rows[0])
    })
    .catch((dbErr) => {
        console.log('in GET edit /stats err', dbErr);
        res.sendStatus(500)
    })
})

//this put route is to help edit a players stats
router.put('/:id', (req, res) => {
    const sqlText = `
    UPDATE "stats"
    SET
        "three_made"=$1, 
        "three_missed"=$2,
        "two_made"=$3,
        "two_miss"=$4,
        "total_points"=$5,
        "rebounds"=$6,
        "assists"=$7,
        "blocks"=$8,
        "steals"=$9 
    WHERE "game_id" = $10
    `;
    const sqlValues = [
        req.body.three_made,
        req.body.three_missed,
        req.body.two_made,
        req.body.two_miss,
        req.body.total_points,
        req.body.rebounds,
        req.body.assists,
        req.body.blocks,
        req.body.steals,
        req.params.id
    ]
    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
    const sqlText2 = `
    UPDATE "game"
    SET
        "comments"=$1 
    WHERE "id" = $2
    `;
    const sqlValues2 = [
        req.body.comments,
        req.params.id
    ]
            pool.query(sqlText2, sqlValues2 )
        res.sendStatus(200)
    })
        .catch((dbErr) => {
            console.log('In Put Error', dbErr);
            res.sendStatus(500)
        })
})
module.exports = router;