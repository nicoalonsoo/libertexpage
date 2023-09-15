const { Router } = require('express');
const router = Router();

const { postUserHandler } = require('../handlers/postUserHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler')
const { getCheckAccessCode } = require('../handlers/checkAccessCodeHandler')
const { downloadDbHandler } = require('../handlers/downloadDbHandler');
const { putUsersHandler } = require('../handlers/putUserHandler');

router.get('/users', getUsersHandler);
router.get('/userstable', getCheckAccessCode);
router.get('/exportToExcel', downloadDbHandler);

router.post('/users', postUserHandler);

router.put('/users', putUsersHandler);


module.exports = router;