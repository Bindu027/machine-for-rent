var getlogin=(req, res) => {
    console.log(email)
    var name=req.query.name
    var email=req.query. email
    var password=req.query.password
    res.render('Login',{name:name,email:email,password:password})
}
var postlogin=(req, res) => {
   console.log(req.body)
    var name=req.body.name
    var email=req.body. email
    var password=req.body.password
    res.render('Login',{name:name,email:email,password:password})}

module.exports={getlogin,postlogin}