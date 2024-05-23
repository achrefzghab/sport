const mongoose =require("mongoose");// import module mongoose
// create match schema attributs with types 
const playerSchema = mongoose.Schema({
    name:String,
    number:Number,
    position:String,
    age:Number,
    teamId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }
});
// create model Name and affect to schema
const player = mongoose.model("Player",playerSchema);

//make player exportable
module.exports =player;