require('./config/db.config')

const app=require('./routes/index')
const express = require('express')
const app = express()

// let router=express.Router()

// router.route('/')




app.listen(8010, () => {
    console.log("I am working")
})