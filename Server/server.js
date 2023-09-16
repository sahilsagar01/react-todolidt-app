const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3001

const mongoConnect = async(params) => {
    try{
       await mongoose.connect(
            process.env.DB || "mongodb+srv://java:gogomaster@database.qrvyh.mongodb.net/ReactToDOApp?retryWrites=true&w=majority"
        );
        console.log("Mongodb atlas Connected")
    }
    catch(err){
        console.log(err)
    }
} 
mongoConnect();

  app.use("/", require("./routes/todoRouter/todoRouter"))


app.listen(process.env.PORT || PORT , () => {
    console.log(`Server is up and running ${PORT}`)
})