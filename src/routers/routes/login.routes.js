const express = require('express')

const router=express.Router()
router.route('/login')
.get((req, res) => {
    res.send("login details")
}).post( (req, res) => {
    res.send("login details")
})
module.exports= router