const express = require('express')

const router=express.Router()

router.route('/register')
.get( (req, res) => {
    res.send("user registration")
}).post((req, res) => {
    res.send("user registration")
}).put((req, res) => {
    res.send("user login")
}).delete((req, res) => {
    res.send("user login")
})
router.route('/login')
.get( (req, res) => {
    res.send("user login")
}).post((req, res) => {
    res.send("user login")
}).put((req, res) => {
    res.send("user login")
}).delete((req, res) => {
    res.send("user login")
})
module.exports=router