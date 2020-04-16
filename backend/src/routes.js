const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx, next) => {
  client.query('SELECT * FROM Employee where id = $1', [1], async(ctx, err, result) => {
    if (err) {
      console.log(err)
      ctx.response.status(400).send(err)
    }
    ctx.response.status(200).send(result.rows);
  });
  next();
});

module.exports = router;