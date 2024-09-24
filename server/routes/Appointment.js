const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/verify')
const {PatientReq,DoctorRes, PatientHis, bookAppointment,getDoc, clearNotify, notifications, docNotify} = require('../controllers/appointment')
router.post('/book',verifyToken,PatientReq);
router.post('/respone',verifyToken,DoctorRes);
router.get('/history',verifyToken,PatientHis);
router.get("/appointment/:data",verifyToken,bookAppointment)
router.get("/getdoc/:id",verifyToken,getDoc)
router.put('/clearnotify/:id/:userId',verifyToken,clearNotify,notifications);
router.get('/notifications/:userId',verifyToken,notifications)
router.get("/docNotify/:docId",verifyToken,docNotify)
module.exports = router