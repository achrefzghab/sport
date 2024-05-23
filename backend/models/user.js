const mongoose = require("mongoose");// import module mongoose
// create match schema attributs with types 
const userShema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    pwd: String,
    tel: Number,
    role:String,
    avatar:String,
});
// create model Name and affect to schema
const user = mongoose.model("User", userShema);

//make signup exportable
module.exports = user;