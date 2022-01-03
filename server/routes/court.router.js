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

module.exports = router;
