const db = require("../config/db");

class TaskModel {
  static createTask(title, description, status, dueDate, userId, callback) {
    const query =
      "INSERT INTO tasks (title, description, status, dueDate, user_id) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [title, description, status, dueDate, userId], callback);
  }

  static getTasksByUser(userId, status, limit, offset, callback) {
    let query = "SELECT * FROM tasks WHERE user_id = ?";
    const values = [userId];

    if (status) {
      query += " AND status = ?";
      values.push(status);
    }

    query += " LIMIT ? OFFSET ?";
    values.push(parseInt(limit), parseInt(offset));

    db.query(query, values, callback);
  }

  static findTaskByIdAndUser(taskId, userId, callback) {
    const query = "SELECT * FROM tasks WHERE id = ? AND user_id = ?";
    db.query(query, [taskId, userId], callback);
  }

  static updateTask(id, userId, title, description, status, dueDate, callback) {
    const query =
      "UPDATE tasks SET title = ?, description = ?, status = ?, dueDate = ? WHERE id = ? AND user_id = ?";
    db.query(query, [title, description, status, dueDate, id, userId], callback);
  }

  static deleteTask(id, userId, callback) {
    const query = "DELETE FROM tasks WHERE id = ? AND user_id = ?";
    db.query(query, [id, userId], callback);
  }
}

module.exports = TaskModel;
