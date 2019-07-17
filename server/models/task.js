const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    
    title: {type: String},
    description: {type: String, default: ""},
    completed: {type: Boolean}
},{timestamps: true});

mongoose.model("Task", TaskSchema);