const mongoose = require("mongoose");
const Task = mongoose.model("Task");

module.exports = {
    index: function(req, res) {
        Task.find({}, function(err,task){
            if(err){
                console.log("Errorrr", err)
                res.json(err);
            } else{
                console.log("Successss", task)
                res.json(task);
            }
        })
    },

    getTask: function(req,res){
        Task.findById({_id: req.params.id}, function(err,task){
            console.log("Controller")
            if(err){
                res.json(err);
            } else{
                res.json(task)
            }
        })
    },

    createTask: function(req,res){
        Task.create(req.body, function(err,task){
            if(err){
                res.json(err);
            } else{
                res.json(task);
            }
        })
    },

    updateTask: function(req, res){
        Task.findByIdAndUpdate({_id: req.params.id}, req.body, function(err,task){
            if(err){
                res.json(err);
            } else{
                res.json(task);
            }
        })
    },

    deleteTask: function(req, res){
        Task.deleteOne({_id: req.params.id}, function(err,task){
            if(err){
                res.json(err);
            } else{
                res.json(task);
            }
        })
    }
};