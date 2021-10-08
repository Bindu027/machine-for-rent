const express=require('express')
const app=express()

app.get('/',(req, res) => {
    
    res.send("user")
})
app.post('/',(req, res) => {
    res.send("user")
})
module.exports=app()