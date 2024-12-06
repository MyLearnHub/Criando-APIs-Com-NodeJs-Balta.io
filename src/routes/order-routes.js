"use strict";

const express = require("express");
const router = express.Router();
const order = require("../controllers/order-controller");

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
