const mongoose = require("mongoose");

const stringSchema = new mongoose.Schema(
    {
        string: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("String", stringSchema);
