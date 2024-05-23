const mongoose =require("mongoose");// import module mongoose
// create match schema attributs with types 
const teamSchema = mongoose.Schema({
    Name:String,
    formation:String,
    owner:String,
    foundation:Number,
    playersId:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Player"
        }
    ]
});
// create model Name and affect to schema
const team = mongoose.model("Team",teamSchema);

//make team exportable
module.exports =team;