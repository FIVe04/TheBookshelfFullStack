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


app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);



app.use(cookieParser());

app.use(express.json());


app.use("/", authRoute);