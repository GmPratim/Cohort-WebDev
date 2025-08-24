const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

let totalCount = 0;
let completedCount = 0;

// Update stats display
function updateStats() {
  totalTasks.textContent = `Total tasks: ${totalCount}`;
  completedTasks.textContent = `Completed: ${completedCount}`;
}

// Add new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // ignore empty input

  // Remove "empty list" message if present
  const emptyMessage = document.querySelector(".empty-list");
  if (emptyMessage) {
    emptyMessage.remove();
  }

  // Create list item
  const li = document.createElement("li");
  li.className = "task-item";

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "complete-checkbox";

  // Task text
  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  deleteBtn.textContent = "Delete";

  // Append
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Update stats
  totalCount++;
  updateStats();

  // Clear input
  taskInput.value = "";

  // Event: Mark as completed
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
    if (checkbox.checked) {
      completedCount++;
    } else {
      completedCount--;
    }
    updateStats();
  });

  // Event: Delete task
  deleteBtn.addEventListener("click", () => {
    if (checkbox.checked) {
      completedCount--;
    }
    totalCount--;
    li.remove();

    // Show empty message if no tasks
    if (totalCount === 0) {
      const msg = document.createElement("li");
      msg.className = "empty-list";
      msg.textContent = "No tasks yet. Add one above!";
      taskList.appendChild(msg);
    }

    updateStats();
  });
}

// Add button click
addButton.addEventListener("click", addTask);

// Enter key to add task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
