const express = require("express");
const app = express();
const cookieParser=require('cookie-parser');
//middleware func-> post, front-> json
app.use(express.json()); //global middleware 
app.listen(3000);
app.use(cookieParser());
const userRouter = require('./Routers/userRouter');
const { protectRoute } = require("./controller/authController");
const { getAllMovie } = require("./controller/movieController");
const MovieRouter = require("./Routers/MovieRouter");
//base route , router to use
app.use("/user", userRouter);
app.use("/dashboard",protectRoute,getAllMovie);
app.use("/movies",MovieRouter)
// app.use("/auth", authRouter);


