const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const app = express();

//import routes
const productRoutes = require("./routes/product")

require("dotenv-flow").config();

//route
app.get ("/api/welcome", (req, res) =>{
    res.status(200).send({message: "Welcome to thhe MEN RESTful API"});
});

mongoose.connect(
    process.env.DBHOST,
    {
        
    }
).catch(error => console.log("Error connecting to MongoDB:" + error));

mongoose.connection.once('open', () => console.log('Connected to the MongoDB database.'));

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log("Server is running on port:" + PORT);

})
module.exports = app;