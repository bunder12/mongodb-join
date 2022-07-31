const express = require('express');
const router = express.Router();
const { update } = require("./controller")

router.put('/update', update);

module.exports = router