const { Router } = require('express');
const router = Router();

const { postUserHandler } = require('../handlers/postUserHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler')

router.get('/users', getUsersHandler);

router.post('/users', postUserHandler);


module.exports = router;