import express from "express";
import cors from "cors";

export const app = express();
app.use(cors());




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
