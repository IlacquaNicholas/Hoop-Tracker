const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//This is to grab the game ID
router.get('/', (req, res) => {

    console.log('In GET /gameId', req.user.id);
    const sqlText = `
    SELECT 
        "date",
        "id"
    FROM "game"
    WHERE "username_id"= $1;
    `;
    pool.query(sqlText, [req.user.id])
        .then((dbRes) => {
            console.log('#########In GET /gameId', dbRes.rows);
            res.send(dbRes.rows)
        })
        .catch((dbErr) => {
            console.log('*****In GET /gameId', dbErr);
            res.sendStatus(500)
        })
})

module.exports = router;