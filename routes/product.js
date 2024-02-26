const router = require("express").Router();
const product = require("../models/product");

//Crud operations

//get

//post
router.post("/", (req, res) => {
    date = req.body;

    product.insertMany(date)
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});
//put

//delete


module.exports = router;