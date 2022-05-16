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
const locationSchema=new mongoose.Schema({
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
})

const locationModel=mongoose.model('locationModel',locationSchema);
module.exports=locationModel;
