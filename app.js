require('./config/db.config')
const { application } = require('express')
const express= require('express')
const app= express()
const path=require('path')

//const UserSchema=require('./src/model')
//const bindu=new UserSchema({username:"bindu", email:"bindu.rockinngirls@gamil.com",password:"abcdef"})

//const options=require('./src/utils/options')
//express.static("public",options)


//ownfiles

const ejs=require('ejs')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'./src/view'))
//bodyparser
const bodyParser=require('body-parser')


//www.form
app.use(bodyParser.urlencoded({ extended: false }))

//json
app.use(bodyParser.json())


//api
const router=require('./src/routers')

app.use('/rent',router.register)

app.use('/rent',router.login)


const checkurl=(req,res,next)=>{
    console.log("i am middle ware" )
    next()
}

app.use(checkurl)

app.route('/')
.get((req, res) => {
    res.render("machine for rent home page")
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
app.listen(8013, () => {
    console.log("I am workingon 8013")
})