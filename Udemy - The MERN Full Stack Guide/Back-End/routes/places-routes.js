const { Router } = require('express');
const router = Router();

const {
        getPlaceByPlaceId, 
        getPlacesByUserId, 
        postPlaceForLoggedUser, 
        patchUpdatePlaceByPlaceId, 
        deletePlaceByPlaceId } = require('../controllers/places-controllers');
 
router.get('/users/:userId', getPlacesByUserId);
router.get('/:placeId',getPlaceByPlaceId);
router.post('/', postPlaceForLoggedUser);
router.patch('/:placeId',patchUpdatePlaceByPlaceId);
router.delete('/:placeId',deletePlaceByPlaceId);

module.exports = router;