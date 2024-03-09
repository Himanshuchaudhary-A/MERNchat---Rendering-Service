import express from "express";
import cors from "cors";
import { connectdb } from "./core/db/config.js";
import bodyparser from "body-parser";
import mongoose from "mongoose"; 
import userRoute from "./core/components/User/handler.js";
import { authMiddleware } from "./core/middlewares/middleware.js";

const app = express();
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());
app.use(cors());
app.use("/api/users", userRoute);


connectdb();

app.get("/", (req, res) => {
  res.send("Hell WOrld");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  res.send("okay");
});

// app.post("/signup", (req , res) => {
//     const details = req.body;
//     console.log('details',details)
//     res.send('mkc')
// })

//Model of the signUp


app.listen(3001, () => {
  console.log("App is running");
});
