const taskManager = require("./taskManager");
const fileHandler = require("./fileHandler");

const path = require("path");

const filePath = path.join(__dirname, "tasks.json");

let tasks = fileHandler.loadTasks(filePath);

// tasks = taskManager.addTask(tasks, "Do the Laundry");
// tasks = taskManager.addTask(tasks, "Wash the Dishes");
//tasks = taskManager.addTask(tasks, "Sweep the floor");
tasks = taskManager.addTask(tasks, "Butter the bread!");

fileHandler.saveTasks(filePath, tasks);

taskManager.listTasks(tasks);
