const { Router } = require('express');
const router = Router();

const {getPlaceByPlaceId,getPlacesByUserId, postPlaceForLoggedUser} = require('../controllers/places-controllers');
 
router.get('/users/:userId', getPlacesByUserId);
router.get('/:placeId',getPlaceByPlaceId);
router.post('/', postPlaceForLoggedUser);

module.exports = router;