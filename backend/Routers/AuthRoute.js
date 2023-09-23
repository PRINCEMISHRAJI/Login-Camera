const { login } = require("../controller/auth");
const { userVerification } = require("../middlewares/authmiddleware");
const router = require("express").Router();

router.post("/login", login);
router.post('/',userVerification);

module.exports = router;