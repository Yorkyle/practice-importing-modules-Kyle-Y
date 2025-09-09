function addTask(tasks, task) {
  return tasks.push(task);
}

function listTasks(tasks) {
  if (tasks.length === 0) {
    console.log("No tasks yet");
  } else
    tasks.forEach((task, i) => {
      console.log(task);
    });

  module.exports = { addTask, listTasks };
}
