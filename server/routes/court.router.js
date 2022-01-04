const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// This router is grabbing the courts id and name for the drop down 
//on the GetReadyForGame page
router.get ('/', (req,res)=>{
    const sqlText = `
    SELECT * FROM "court"
    ORDER BY "name" ASC;
    `;
    pool.query(sqlText)
    .then((result)=>{
        console.log('In GET /courtName', result);
        res.send(result.rows)
    })
    .catch ((dbErr)=>{
        console.log('In GET /courtName', dbErr);
        res.sendStatus(500)
    })
});

router.post('/', (req, res)=>{
    console.log('in POST Req.body ready for game', req.body);
    const insertGameInput = `
    INSERT INTO "game" ("date", "court_id")
    VALUES ($1, $2)
    RETURNING "id";
    `;
    pool.query (insertGameInput, [req.body.date, req.body.court_id])
    .then ((result)=>{
        console.log('New Game id:', result.rows[0].id);
        const createGameId = result.rows[0].id

        const insertTeamInput = `
        INSERT INTO "stats" ("playerName_id")
        VALUES  ($1);
        `;
        pool.query(insertTeamInput, [createGameId, req.body.playerName_id])
        .then((result)=>{
            res.sendStatus(201);
        }).catch((err)=>{
            res.sendStatus(500)
        })
    })
})

module.exports = router;
