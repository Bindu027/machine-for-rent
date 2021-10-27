const express = require('express')
const {getlogin, postlogin } = require('../../controller/login.ctrl.js')


const router=express.Router()
router.route('/login')
.get(getlogin)
.post(postlogin)
module.exports= router