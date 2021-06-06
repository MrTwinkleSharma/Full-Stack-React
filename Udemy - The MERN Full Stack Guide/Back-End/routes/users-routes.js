const { Router } = require('express');
const router = Router();

const {
        signUp, 
        logIn, 
        getUsers } = require('../controllers/users-controllers');
 
router.get('/', getUsers);
router.post('/signup', signUp);
router.post('/login', logIn);

module.exports = router;