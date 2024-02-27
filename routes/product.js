const router = require("express").Router();
const product = require("../models/product");

//Crud operations

//GET
router.get("/", (req, res) => {
    date = req.body;

    product.find()
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});

//GET in Stock 
router.get("/instock", (req, res) => {

    product.find({ inStock: true})
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});

//GET specific product 
router.get("/:id", (req, res) => {

    product.findById(req.params.id)
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});


//POST
router.post("/", (req, res) => {
    date = req.body;

    product.insertMany(date)
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});
//PUT
router.put("/:id", (req, res) => {
    const id = req.params.id;

    product.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Cannot update product with id=" + id + ". Maybe product was not found!" });
            else
                res.send({ message: "Product was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating Product with id=" + id });
        });

});

//DELETE
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    product.findByIdAndDelete(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Cannot delete product with id=" + id + ". Maybe product was not found!" });
            else
                res.send({ message: "Product was deleted successfully." });
        })
        .catch(err => {
            res.status(500).send({ message: "Error deleting Product with id=" + id });
        });

});

module.exports = router;