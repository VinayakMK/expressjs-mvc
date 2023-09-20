const dotenv = require("dotenv");
const app = require("./app");
const databaseConnection = require('./config/databaseConnection');


dotenv.config({path:'./config/config.env'});

databaseConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})