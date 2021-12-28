const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//This router is being used on the UserPage.jsx to add a team name and player name. 

router.get('/', (req, res) => {
    // GET route code here
    const sqlText = `
    SELECT * FROM "playerName"
    WHERE "username_id"=$1;
    `;
    const sqlValues = [req.user.id]
    pool.query (sqlText, sqlValues)
    .then((dbRes)=>{
        res.send(dbRes.rows)
    })
    .catch((dbErr)=>{
        res.sendStatus(500)
    })
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
/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req,res)=>{
    const playerDelete = req.params.id;
    console.log('In DELETE req.params.id:', req.params.id);
    const sqlText = `
    DELETE FROM "playerName"
    WHERE "id"=$1;
    `;
    const sqlValues = [playerDelete]
    pool.query(sqlText, sqlValues)
    .then ((dbRes)=>{
        res.sendStatus(200)
    })
    .catch((dbErr)=>{
        res.sendStatus(500)
        console.log('players DELETE dbErr', dbErr);
    })
})



module.exports = router;