const Router = require('koa-router');
const router = new Router();
const SessionController = require('../controllers/SessionController');

router.get('/', async (ctx) => {
  ctx.body = {
    status: 'success',
    message: 'Hello World!'
  }
}),

router.get('/profile/:id', SessionController.create)

module.exports = routes;