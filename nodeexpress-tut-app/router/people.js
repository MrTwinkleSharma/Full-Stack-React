const express = require('express');
const { get, post, getWithId, putWithId, deleteWithId } = require('./controllers');

const router = express.Router();

router.route('/')
.get(get)
.post(post);

router.route("/:id")
.get(getWithId)
.put(putWithId)
.delete(deleteWithId);

module.exports = router;
