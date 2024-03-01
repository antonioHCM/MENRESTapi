const mongoose = require ("mongoose");



const Schema = mongoose.Schema;

let workspaceSchema = new Schema(
    {
        workspaceId: {type: Number},
        name: {type: String},
        
    }
)

module.exports = mongoose.model("workspace", workspaceSchema);