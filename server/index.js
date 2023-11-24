const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

require("dotenv").config();
const {MONGO_URL, PORT} = process.env;

const app = express();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


mongoose
    .connect(MONGO_URL)
    .then(()=> console.log("Successfully connected to MognoDB"))
    .catch((err) => console.log(err));


 app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");
    next();
  });

app.use(
    cors({
        origin: ["https://the-bookshelf-full-stack.vercel.app/"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: false
    })
);



app.use(cookieParser());

app.use(express.json());


app.use("/", authRoute);
