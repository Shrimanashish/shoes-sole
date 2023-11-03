import express from 'express'
import {addUser , getUser , getProductid , checkUser}  from '../controler/user-controler.js';

const router = express.Router();

router.post('/Login',addUser);
router.post('/Sign',checkUser);
router.get('/Product',getUser);
router.post('/data',getProductid);


export default router;