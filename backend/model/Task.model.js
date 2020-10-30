const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  task: String,
  time: String,
  isFinished: { type: Boolean, default: false },
});

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = TaskModel;