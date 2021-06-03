const { Router } = require('express');
const express = require('express');

const router =  Router();

router.get('/', (req, res)=>{
    console.log("Get Request in Users Route");
    res.json({success:true});
});

module.exports = router;