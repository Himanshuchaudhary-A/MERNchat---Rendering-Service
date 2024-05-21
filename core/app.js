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

app.listen(process.env.PORT, () => {
  console.log("App is running");
});

