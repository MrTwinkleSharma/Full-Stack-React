const authorize = (req, res, next) =>{
    
    if(req.query.user==='Twinkle')
    {
        console.log("Authorize");
        next();
    }
    else 
    res.send("Unauthorized");

}

module.exports = authorize;