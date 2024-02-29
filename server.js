const express = require ("express");
const mongoose = require ("mongoose");
const bodyParser = require ("body-parser");
const swaggerUi = require("swagger-ui-express");
const yaml = require('yamljs');
const app = express();

//import routes
const productRoutes = require("./routes/product")
const authRoutes = require("./routes/auth")
require("dotenv-flow").config();

//swagger
const swaggerDefenition = yaml.load('./swagger.yaml');
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDefenition));

//Parse request Json
app.use(bodyParser.json());



mongoose.connect(
    process.env.DBHOST,
    {
        
    }
).catch(error => console.log("Error connecting to MongoDB:" + error));

mongoose.connection.once('open', () => console.log('Connected to the MongoDB database.'));

//route
app.get ("/api/welcome", (req, res) =>{
    res.status(200).send({message: "Welcome to thhe MEN RESTful API"});
});

//product route
app.use("/api/products", productRoutes);
app.use("/api/user", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, function(){
    console.log("Server is running on port:" + PORT);

})
module.exports = app;