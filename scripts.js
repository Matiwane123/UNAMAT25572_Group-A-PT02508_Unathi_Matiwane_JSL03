// 1. Keep your helper function
function createTask(id) {
  const title = prompt(`Enter task ${id} title:`);
  const description = prompt(`Enter task ${id} description:`);
  let status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  const validStatuses = ["todo", "doing", "done"];

  while (!validStatuses.includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }
  return { id, title, description, status };
}

// 2. Define the base tasks from the image
const initialTasks = [
  { id: 1, title: "Gym", description: "Work those muscles", status: "todo" },
  { id: 2, title: "Study", description: "Work those brains", status: "doing" },
  { id: 3, title: "Sleep", description: "Rest that bod", status: "done" },
  {
    id: 4,
    title: "Correct JSL02",
    description: "Make corrections to JSL02 before attempting JSL03",
    status: "done",
  },
];

// 3. Create two new tasks via prompts (starting at ID 5)
const task5 = createTask(5);
const task6 = createTask(6);

// 4. THE FIX: Combine everything into one "All tasks" array
const allTasks = [...initialTasks, task5, task6];

// 5. Filter the combined list for "done" status
const completedTasks = allTasks.filter((task) => task.status === "done");

// 6. Log with exact labels from the screenshot
console.log("All tasks:", allTasks);
console.log("Completed tasks:", completedTasks);

// Motivational logic (Optional)
if (completedTasks.length === 0) {
  console.log("No tasks completed, let's get to work!");
}
