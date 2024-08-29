var express= require ("express");
var multer=require ("multer");
var app= express();
var upload= multer();
var cors =require ("cors");
const {MongoClient}=require("mongodb");
const port=8001;
app.use(cors()); 
// Database connection
async function createDb()
{
var url = "mongodb://0.0.0.0:27017/";
const client= new MongoClient(url);
var db= client.db("easylearn");
var collection= db.collection("users");
return collection;
}

//Registration api
app.post("/api/register",upload.array(),async function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var m_no = req.body.mobile;
    var response = await createDb();
    var checkEmail = await response.find({ email: email}).toArray();
    console.log("checkEmail",checkEmail);
    if(checkEmail.length===0){
      var data=await response.insertOne({
        name: name,
        email: email,
        password: password,
        m_no: m_no
    });
    console.log("data", data);
    if (data) {
      res.send({ message: "user resistered successfully", status: 1 });
    } else {
      res.send({ message: "user not resistered successfully", status: 0 });
    }
      
    }
    else{
      console.log("email already registered");
      res.send({message: "Email already registered",status:0});
    }
    

});


//login api

app.post("/api/login",upload.array(),async function(req, res) {

   var email = req.body.email;
   var password = req.body.password;
   var response = await createDb();
   var data = await response.find({ email: email}).toArray();
   console.log("data", data);
   if (data.length>0)
   {
    if(email===data[0].email && password===data[0].password){
      res.send({ message: "login successful", status:1,name:data[0].name,email:data[0].email});
    }
    else{
      res.send({ message: "login failed", status:0});
    }
   }
   else{
    res.send({
      message: "You are not registered with us please register first",
      status: 0,
    });
   }
});


// Forget Password
app.post("/api/forgetPassword",upload.array(),async function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  var confirmpassword = req.body.confirmpassword;
  var response = await createDb();
  var data = await response.find({ email: email}).toArray();
  if(data.length>0){
    var result = await response.updateMany(
      { email: email},{$set:{email:email,password:password}}
      );
      console.log(result);
      if (result.acknowledged ===true){
        res.send({ message: "update successful", status:1});
      }
      else{
        res.send({message:"password not updated",status:0});

      }}
  else{
    res.send({message:"user not found",status:0});
  }
  });



  // Delete user 
  app.post("/api/delete/:email", async function (req, res) {
    console.log("req.params =", req.params);
    var email = req.params.email;
    var response = await createDb();
    var data = await response.find({ email: email }).toArray();
    console.log("data =", data.length);
    if (data.length) {
      var data = await response.deleteOne({ email: email });
      if (data) {
        console.log("all user data", data);
        res.send({ message: "user deleted susseccfully", status: 1, data: data });
      } else {
        res.send({ message: "user not deleted susseccfully", status: 0 });
      }
    } else {
      res.send({ message: "user not found", status: 0 });
    }
  });




  // port number
app.listen(port, function () {
  console.log("server is running on port", port);
});