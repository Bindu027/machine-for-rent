const express = require('express')

const router=express.Router()

router.route('/register')
.get( (req, res) => {
    var data=req.params.name
    console.log(data)
    res.render('Register')
}).post((req, res) => {
    res.render('Register')
})

module.exports=router