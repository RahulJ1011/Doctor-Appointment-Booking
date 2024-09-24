const express = require('express');
const router = express.Router();
const {Doctorlogin,register,PatientLogin, DoctorRegister} = require("../controllers/Auth")
router.post("/register",register);
router.post("/DoctorLogin",Doctorlogin);
router.post("/PatientLogin",PatientLogin);
router.post("/DocRegister",DoctorRegister);

module.exports = router;