const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { bodyValidation, authentication } = require("../../middleware");
const { schemas } = require("../../models/user");

router.post("/register", bodyValidation(schemas.registerSchema), ctrl.register);

router.post("/login", bodyValidation(schemas.loginSchema), ctrl.login);

router.post("/logout", authentication, ctrl.logout);

router.get("/current", authentication, ctrl.getUser);

module.exports = router;
