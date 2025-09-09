const fs = require("fs");

function saveTasks(filePath, tasks) {
  fs.writeFileSync(filePath, tasks);
}

function loadTasks(filePath) {
  fs.readFileSync(filePath);
}

module.exports = { saveTasks, loadTasks };

// taskArr = ["Do the dishes", "Wash the clothes", "Sweep the floor"];

// console.log(saveTasks(tasks.json, taskArr));
