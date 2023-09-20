const { Router } = require('express');
const router = Router();

const { postUserHandler } = require('../handlers/postUserHandler');
const { getUsersHandler } = require('../handlers/getUsersHandler')
const { getCheckAccessCode } = require('../handlers/checkAccessCodeHandler')
const { downloadDbHandler } = require('../handlers/downloadDbHandler');
const { putUsersHandler } = require('../handlers/putUserHandler');
const { postFilterHandler } = require('../handlers/postFilterHandler');

router.get('/users', getUsersHandler);
router.get('/userstable', getCheckAccessCode);
router.get('/exportToExcel', downloadDbHandler);

router.post('/users', postUserHandler);
router.post('/filter', postFilterHandler);

router.put('/users', putUsersHandler);


module.exports = router;