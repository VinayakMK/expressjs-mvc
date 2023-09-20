const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

const userRoutes = require("./routes/userRoutes");

app.use('/api/v1', userRoutes);
   

module.exports = app;