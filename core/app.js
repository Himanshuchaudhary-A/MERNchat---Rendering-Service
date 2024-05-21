import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

export const app = express();
app.use(cors());
app.use(bodyParser.json());

//routes import
import userRouter from './routes/user.routes.js'


//secured routes
app.use("/api/users", userRouter)


// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   console.log(email, password);
//   res.send("okay");
// });

// app.post("/signup", (req , res) => {
//     const details = req.body;
//     console.log('details',details)
//     res.send('mkc')
// })

//Model of the signUp


app.listen(process.env.PORT, () => {
  console.log("App is running");
});
