const { Router } = require('express');
const router = Router();

const {getPlaceByPlaceId,getPlacesByUserId} = require('../controllers/places-controllers');
 
router.get('/users/:userId', getPlacesByUserId);
router.get('/:placeId',getPlaceByPlaceId);

module.exports = router;