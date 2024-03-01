const mongoose = require ("mongoose");



const Schema = mongoose.Schema;

let workspaceContributorSchema = new Schema(
    {
        userId: {type: Number},
        workspaceId: {type: String},
        isAdmin: {type: Boolean}
    }
)

module.exports = mongoose.model("workspaceContributor", workspaceContributorSchema);