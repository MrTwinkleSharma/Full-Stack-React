const { Router } = require('express');
const express = require('express');

const router =  Router();

router.get('/users', (req, res)=>{
    console.log("Get Request in Places Route");
    res.json({success:true});
});

module.exports = router;