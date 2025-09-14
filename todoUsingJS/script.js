// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return alert("Please enter a task");

  // Create li element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

// Event listeners
addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});
