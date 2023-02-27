const express = require("express");
const app = express();
const DB = require("./database").connectDB;
//Routes
const authRoutes = require("./routes/authRoutes");
// Connect to our DB
DB();

app.use(express.json());
app.use("/api/v1/auth",authRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port: ${process.env.PORT}`);
});


