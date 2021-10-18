require('./config/db.config')
const { application } = require('express')
const express= require('express')
const app= express()

//const UserSchema=require('./src/model')
//const bindu=new UserSchema({username:"bindu", email:"bindu.rockinngirls@gamil.com",password:"abcdef"})

//api
const router=require('./src/routers')
app.use('/rent',router.rent)




const checkurl=(req,res,next)=>{
    console.log("i am middle ware" +req.params.k)
    next()
}

app.use(checkurl)

app.route('/')
.get((req, res) => {
    res.send("machine for rent home page")
})

app.get('*',(req,res)=>{
    var obj={
        statuscode:404,
        message:"enter proper url"
    }
    res.send(obj)
})

//bindu.save()


// const SwaggerUi=require('swagger-ui-express')
// const user_api=('./config/swagger')
// app.use('/',SwaggerUi.serve,SwaggerUi.setup(user_api))
app.listen(8011, () => {
    console.log("I am workingon 8010")
})