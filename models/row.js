const mongoose = require ("mongoose");



const Schema = mongoose.Schema;

let rowSchema = new Schema(
    {
        rowId: {type: Number},
        workflowId: {type: Number},
        workspaceId: {type: Number},
        description: {type: String},
        position: {type: Number}
        
    }
)

module.exports = mongoose.model("row", rowSchema);