const express = require("express");
const router = express.Router();

const { createEmployee, getEmployees } = require("../controllers/employee");

router.route("/get").get(getEmployees);
router.route("/create").post(createEmployee);

module.exports = router;
