const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
    console.log('In POST req.body', req.body);
    const sqlText = `
    INSERT INTO "playerName"
    ("team_name", "player_name", "username_id")
    VALUES
    ($1, $2, $3);
    `;
    const sqlValues = [
        req.body.teamName,
        req.body.playerName,
        req.user.id
    ];
    pool.query(sqlText, sqlValues)
    .then ((dbRes)=>{
        res.sendStatus(201)
    })
    .catch((dbErr)=>{
        res.sendStatus(500)
    })
    
});


module.exports = router;