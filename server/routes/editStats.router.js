const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//this put route is to help edit a players stats
// router.put('/:id', (req, res) => {
//     const sqlText = `
//     UPDATE "stats"
//     SET
//         "three_made"=$1, 
//         "three_missed"=$2,
//         "two_made"=$3,
//         "two_miss"=$4,
//         "rebounds"=$5,
//         "assists"=$6,
//         "blocks"=$7,
//         "steals"=$8, 
//     WHERE "id" = $9
//     `;
//     const sqlValues = [
//         req.body.three_made,
//         req.body.three_missed,
//         req.body.two_made,
//         req.body.two_miss,
//         req.body.rebounds,
//         req.body.assists,
//         req.body.blocks,
//         req.body.steals,
//         req.params.id
//     ]
//     pool.query(sqlText, sqlValues)
//         .then((dbRes) => {
//             res.sendStatus(200)
//         })
//         .catch((dbErr) => {
//             console.log('In Put Error', dbErr);
//             res.sendStatus(500)
//         })
// })
module.exports = router;