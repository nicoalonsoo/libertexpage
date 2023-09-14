const { Router } = require('express');
const router = Router();

const { postUserHandler } = require('../handlers/postUserHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler')
const { getCheckAccessCode } = require('../handlers/checkAccessCodeHandler')

router.get('/users', getUsersHandler);
router.get('/userstable', getCheckAccessCode);

router.post('/users', postUserHandler);


module.exports = router;