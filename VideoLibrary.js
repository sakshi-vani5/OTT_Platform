const express1=require("express")  //import express
const cors=require("cors") //command npm install cors //react ka server alg hai or node m hum jo server bnaege vo alg dono alg alg hain to humko react k server ka data node m bjejne k liye yeh cors module ka use krte hain
const bodyparser1=require('body-parser')//npm install body-parser 
const mongoose1=require("mongoose")//npm install mongoose 
const server=express1()
main().catch(err=>console.log(err))
async function main() 
{
    await mongoose1.connect('mongodb://127.0.0.1:27017/VideoLib') //create new database named test
    console.log("db connected")
}
const userSchema=mongoose1.Schema({                                    //shema is used for make the structure of collection (userSchema)
    Username : String,
    MobileNo : String,
   Email : String,
   typeOfMovie : String,
   nameofmovie : String,
    
})
const User =mongoose1.model("User",userSchema)   //model is used for sending collection in the mongodb //First User is definned is class //second user is used for collection
server.use(cors())
server.use(bodyparser1.json())
server.post("/moviee",async (req,res)=>
{
    let user=new User()   // new is used to make contructor//first user is used for object of class//sec. is used for constructor of class
    user.Username=req.body.Username
    user.MobileNo=req.body.MobileNo
    user.Email=req.body.Email
    user.typeofmovie=req.body.typeofmovie
    user.nameofmovie=req.body.nameofmovie
   
    const doc=await user.save()   //save in the mongo db 
    console.log(doc)
    res.json(doc)   //sending the data in reactjs thats why it convert into json q ki yeh object m tha 
})
server.listen(8089,()=>
{
    console.log("server started");
})