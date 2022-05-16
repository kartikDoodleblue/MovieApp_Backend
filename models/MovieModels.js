//mongoDB
const mongoose=require('mongoose');
const db_link='mongodb+srv://admin:admin@cluster0.jvsgm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
  // console.log(db);
  console.log('db connected');
})
.catch(function(err){
  console.log(err);
});
const MovieSchema=mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique :true
  },
  cast:{
    type:[String],
    required:true,
  },
  language:{
    type:String,
    required:true,
    enum:["English","Hindi"]
  },
  Genre:{
    type:String,
    required:true,
  },
  // locations :{
  //   type:[mongoose.Schema.ObjectId],
  //   ref:"locationModel"
  // },
  locations:[{
    name:{type:String,
    required:true
    },
    timings:{
     type: [String],
     required:true
    },
    theaterName:{
      type:String,
    required:true
    },
    price:{
      type:Number,
      required:true
    }
}]
});

// model
const MovieModels=mongoose.model('MovieModels',MovieSchema);
module.exports=MovieModels;
