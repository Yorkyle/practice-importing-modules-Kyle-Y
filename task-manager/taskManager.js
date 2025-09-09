function addTask(tasks, task) {
  tasks.push(task);
  return tasks;
}

function listTasks(tasks) {
  if (tasks.length === 0) {
    console.log("No tasks yet");
  } else {
    tasks.forEach((task, i) => {
      console.log(`${i + 1}.${task}`);
    });
  }
}

module.exports = { addTask, listTasks };
