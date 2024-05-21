import dotenv from 'dotenv';
import { connectDB } from './db/index.js';
import { app } from './app.js';
import { Server } from 'socket.io';
import cors from "cors";

dotenv.config({
    path: './.env'
})

connectDB().then(() => {
    const httpServer = app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
    
    // Initialize Socket.IO with the existing HTTP server
    const io = new Server(httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    /***** IO Sockets */
    io.on("connection", (socket) => {
        console.log("User Connected", socket.id);
      
        socket.on("message", ( message ) => {
          console.log('in backend',message);
          socket.broadcast.emit("receive-message", message);
        });
      
        socket.on("disconnect", () => {
          console.log("User Disconnected", socket.id);
        });
    });

}).catch(error => console.log('error', error))
