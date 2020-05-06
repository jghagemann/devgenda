const Router = require("koa-router");
const router = new Router();
const SessionController = require("../controllers/SessionController");
const UserController = require("../controllers/UserController");

router.post("/", SessionController.isLoggedIn);

router.post("/users", UserController.create);

module.exports = router;