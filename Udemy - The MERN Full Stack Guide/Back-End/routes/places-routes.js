const { Router } = require('express');
const { check } = require('express-validator');

const router = Router();

const {
        getPlaceByPlaceId, 
        getPlacesByUserId, 
        postPlaceForLoggedUser, 
        patchUpdatePlaceByPlaceId, 
        deletePlaceByPlaceId } = require('../controllers/places-controllers');
 
router.get('/users/:userId', getPlacesByUserId);
router.get('/:placeId',getPlaceByPlaceId);

//We Need to Validate data for POST & PATCH 
router.post('/',
        [
        check('placeTitle').not().isEmpty(), 
        check('placeDescription').isLength({min:5}), 
        check('placeAddress').not().isEmpty()
        ], 
        postPlaceForLoggedUser);

router.patch('/:placeId',
        [
        check('updatedTitle').not().isEmpty(), 
        check('updatedDescription').isLength({min:5})
        ],
        patchUpdatePlaceByPlaceId);

router.delete('/:placeId',deletePlaceByPlaceId);

module.exports = router;