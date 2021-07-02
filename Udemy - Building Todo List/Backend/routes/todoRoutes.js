const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('get Request on todo Routes');
})


router.post('/', (req, res)=>{
    res.send('post Request on todo Routes');
})


router.patch('/', (req, res)=>{
    res.send('patch Request on todo Routes');
})


router.delete('/', (req, res)=>{
    res.send('delete Request on todo Routes');
})

module.exports = router;