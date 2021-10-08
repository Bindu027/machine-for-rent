const mongoose=require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/bindu',{useNewUrlParser:true,useUnifiedTopology:true},
(err,link)=>{

    if(err){
        console.log("error occured",err)
    }else{
        console.log("db connected")
    }
})