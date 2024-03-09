import mongoose from "mongoose"
export const connectdb=async()=>{
    try{
        await mongoose.connect(
          "mongodb+srv://chaudharyhimanshu717:12345@mernchatcluster.mgf6bnm.mongodb.net/?retryWrites=true&w=majority&appName=MernChatCluster"
        );
        console.log("Database connected");
    }
    catch{
        console.log("Database not connected");
    }
}