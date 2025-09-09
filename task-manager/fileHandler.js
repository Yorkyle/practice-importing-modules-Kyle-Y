const fs = require("fs");

function saveTasks(filePath, tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks));
  console.log("Task saved");
}

function loadTasks(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const input = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(input);
}

module.exports = { saveTasks, loadTasks };

// taskArr = ["Do the dishes", "Wash the clothes", "Sweep the floor"];

// console.log(saveTasks(tasks.json, taskArr));
