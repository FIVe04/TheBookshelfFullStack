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



const corsOptions = {   origin: "*",   methods:
    "GET,HEAD,PUT,PATCH,POST,DELETE",   allowedHeaders:
        "Access-Control-Allow-Headers,Access-Control-Allow-Origin,Access-Control-Request-Method,Access-Control-Request-Headers,Origin,Cache-Control,Content-Type,X-Token,X-Refresh-Token",   credentials: true,   preflightContinue: false,  
    optionsSuccessStatus: 204 };
app.use(cors(corsOptions));


app.use(cookieParser());

app.use(express.json());


app.use("/", authRoute);
