const Router = require('koa-router');
const router = new Router();
const SessionController = require('../controllers/SessionController');

router.get('/', SessionController.isLoggedIn)

module.exports = router