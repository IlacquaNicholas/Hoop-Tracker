const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.post('/', (req, res)=>{
//     console.log('in POST /stats', req.body);
    
//     const statData = req.body;
//     const sqlText = `
//     INSERT INTO "stats"
//     ("playerName_id", "game_id", "three_made", "three_missed", "two_made", "two_miss", "total_points", "rebounds", "assists", "blocks", "steals")
//     VALUES
//     ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
//     `;
//     const sqlValues = [
//         statData.playerName_id,
//         statData.game_id,
//         statData.three_made, 
//         statData.three_missed,
//         statData.two_made,
//         statData.two_missed, 
//         statData.total_points,
//         statData.rebounds,
//         statData.assists,
//         statData.blocks,
//         statData.steals
//     ];
//     pool.query(sqlText, sqlValues)
//     .then((dbRes)=>{
//         res.sendStatus(201)
//     })
//     .catch((dbErr)=>{
//         console.log('In Post /stats', dbErr);
//         res.sendStatus(500)
//     })
// })

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