const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
// require('dotenv').config();
// const authRouter = require('./routes/auth');
// const { MONGO_URL, PORT } = process.env;
const cookieParser = require("cookie-parser");
const authRoute = require("./Routers/AuthRoute");
const app = express();

// const MONGO_URL = "mongodb+srv://admin:dummy123@cluster0.ld84bmg.mongodb.net/";
// mongoose.connect(MONGO_URL, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
// }).then(() => console.log("Database is connected successfully"))
//   .catch((err) => console.log(err));
  
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,

}
app.use(cors(corsOptions));

// app.use('/api/auth', authRouter);

const PORT = 8080;
app.listen(PORT, (err)=>{
    if(err) {
        res.json({
            error : "App not listening"
        })
    };
    console.log("Server is running on Port 8080");
})

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);