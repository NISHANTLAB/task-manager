const TaskModel = require("../models/task.model");

// Create Task
exports.createTask = (req, res) => {
  const { title, description, status, dueDate } = req.body;
  const userId = req.user.id;

  TaskModel.createTask(title, description, status, dueDate, userId, (err) => {
    if (err) return res.status(500).json({ error: err,status:500,Success:false});
    res.status(201).json({ message: "Task created",status:201,Success:true });
  });
};

// Get Paginated Tasks
exports.getTasks = (req, res) => {
  const { status, limit = 10, page = 1 } = req.query;
  const offset = (page - 1) * limit;
  const userId = req.user.id;

  TaskModel.getTasksByUser(userId, status, limit, offset, (err, tasks) => {
    if (err) return res.status(500).json({ error: err ,status:500,Success:false});
    res.status(201).json({data:tasks,message:"Get all tasks" ,status:201,Success:true});
  });
};

// Update Task
exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;
  const userId = req.user.id;

  TaskModel.findTaskByIdAndUser(id, userId, (err, results) => {
    if (err) return res.status(500).json({ error: err ,status:500,Success:false});
    if (results.length === 0) return res.status(403).json({ message: "Access denied" });

    TaskModel.updateTask(id, userId, title, description, status, dueDate, (err) => {
      if (err) return res.status(500).json({ error: err ,status:500,Success:false});
      res.json({ message: "Task updated successfully" ,status:201,Success:true});
    });
  });
};

// Delete Task
exports.deleteTask = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  TaskModel.findTaskByIdAndUser(id, userId, (err, results) => {
    if (err) return res.status(500).json({ error: err ,status:500,Success:false});
    if (results.length === 0) return res.status(403).json({ message: "Access denied" });

    TaskModel.deleteTask(id, userId, (err) => {
      if (err) return res.status(500).json({ error: err ,status:500,Success:false});
      res.json({ message: "Task deleted successfully" ,status:201,Success:true});
    });
  });
};
