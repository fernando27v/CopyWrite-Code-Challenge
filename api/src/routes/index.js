const { Router } = require("express");
const router = Router();
const { getText } = require("../controllers/getText");

router.get("/iecho", getText);

module.exports = router;
