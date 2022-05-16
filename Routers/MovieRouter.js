const express = require("express");
const MovieRouter = express.Router();
const{getAllMovie,createMovies}=require('../controller/movieController');

MovieRouter
.route('/')
.get(getAllMovie)
.post(createMovies);

module.exports=MovieRouter;