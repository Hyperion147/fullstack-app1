import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

app.get("/", (req, res) => {
    console.log("Getted");
})

connectDB()
.then(()=> {
    app.on("error", (error) => {
        console.log(error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at Port ${process.env.PORT}`);  
    })
})
.catch((err) => console.log("Mongo DB connection failed : ", err))