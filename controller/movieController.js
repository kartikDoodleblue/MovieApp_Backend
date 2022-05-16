const express = require("express");
const MovieModels = require("../models/MovieModels");
// const locationModel=require("../models/locationModel");
// const jwt = require("jsonwebtoken");
// const { JWT_KEY } = require("../secrets");

//sign up user
module.exports.getAllMovie = async function getAllMovie(req, res) {
  
  try {
   
    // console.log(req.query);
        
    let movie = await MovieModels.find(req.query);
    if (movie) {
      return res.json({
        message: "Movies available",
        data: movie,
      });
    } else {
      res.json({
        message: "error while fetching movies",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};
module.exports.createMovies=async function createMovies(req,res){
    try {
        let dataObj = req.body;
// let location=dataObj.locations;
// let locationids=[];
// for(let i=0;i<location.length;i++){
//  let locationObj= await locationModel.create(location[i])
//  locationids.push(locationObj["_id"]);
// }
// dataObj.location=locationids;
        let movie = await MovieModels.create(dataObj);
        if (movie) {
          return res.json({
            message: "movie created",
            data: movie,
          });
        } else {
          res.json({
            message: "error while signing up",
          });
        }
        
      } catch (err) {
        res.json({
          message: err.message,
        });
      }
}
