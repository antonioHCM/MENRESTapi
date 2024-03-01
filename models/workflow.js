const mongoose = require ("mongoose");



const Schema = mongoose.Schema;

let workflowSchema = new Schema(
    {
        workflowId: {type: Number},
        name: {type: String},
        positon: {type: Number},
        workspaceId: {type: Number}
        
    }
)

module.exports = mongoose.model("workflow", workflowSchema);