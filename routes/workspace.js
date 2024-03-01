const router = require("express").Router();
const workspace = require("../models/workspace");
const { verifyToken } = require("../validation");

//Crud operations


//GET
router.get("/", (req, res) => {
    date = req.body;

    workspace.find()
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});

//POST
router.post("/", verifyToken, (req, res) => {
    date = req.body;

    workspace.insertMany(date)
    .then(data => { res.send(data)})
    .catch(err =>{res.status(500).send( {message: err.message });})
});
//PUT
router.put("/:workspaceId", verifyToken, (req, res) => {
    const workspaceId = req.params.workspaceId;

    workspace.findByIdAndUpdate(workspaceId, req.body)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Cannot update workspace with id=" + workspaceId + ".  not found!" });
            else
                res.send({ message: "Workspace was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({ message: "Error updating workspace with id=" + workspaceId });
        });

});
//DELETE 
router.delete("/:workspaceId",verifyToken, (req, res) => {
    const workspaceId = req.params.workspaceId;

    workspace.findByIdAndDelete(workspaceId)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Cannot delete workspace with id=" + workspaceId + ".  not found!" });
            else
                res.send({ message: "Workspace was deleted successfully." });
        })
        .catch(err => {
            res.status(500).send({ message: "Error deleting workspace with id=" + workspaceId });
        });

});
module.exports = router;