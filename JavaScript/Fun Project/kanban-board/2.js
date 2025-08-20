const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");
const addBoard = document.getElementById("bAdd"); // + button
const mainContainer = document.getElementById("boards");
const h3Tag = document.getElementById("myHeading");

// === drag helpers ===
function attachDragEvents(target) {
  target.addEventListener("dragstart", () => target.classList.add("flying"));
  target.addEventListener("dragend", () => target.classList.remove("flying"));
}

function makeBoardDroppable(boardEl) {
  boardEl.addEventListener("dragover", (e) => {
    e.preventDefault(); // allow dropping
    const flying = document.querySelector(".flying");
    if (!flying) return;

    const heading = boardEl.querySelector("h3");
    if (heading) {
      boardEl.insertBefore(flying, heading.nextSibling); // keep tasks just under h3
    } else {
      boardEl.appendChild(flying);
    }
  });
}

// make the hard-coded boards droppable
document.querySelectorAll(".board").forEach(makeBoardDroppable);

// === Add Board (+) ===
addBoard.addEventListener("click", () => {
  const title = prompt("Enter title");

  if (!title || title.trim() === "") {
    alert("Board title is required!");
    return;
  }

  const creDiv = document.createElement("div");
  const creDtl = document.createElement("button");
  creDtl.innerText = "x";
  creDtl.style.cursor = "pointer";

  creDiv.classList.add("board");
  makeBoardDroppable(creDiv); // <-- important for new boards

  // insert before the + button wrapper
  mainContainer.insertBefore(creDiv, addBoard.parentElement);

  // delete button
  creDiv.appendChild(creDtl);
  creDtl.addEventListener("click", () => creDiv.remove());

  // heading
  const cloneh3 = h3Tag.cloneNode(true);

  cloneh3.textContent = title || cloneh3.textContent;
  creDiv.appendChild(cloneh3);
});

// === Add Task ===
addTaskBtn.addEventListener("click", () => {
  const input = prompt("Add your task");
  if (!input) return;

  // wrapper (only this is draggable)
  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("task-wrapper");
  taskWrapper.setAttribute("draggable", true);
  attachDragEvents(taskWrapper);

  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  taskCard.innerText = input;

  const taskDlt = document.createElement("button");
  taskDlt.textContent = "Delete";
  taskDlt.style.cursor = "pointer";
  taskDlt.style.marginLeft = "10px";
  taskDlt.addEventListener("click", () => taskWrapper.remove());

  // inline edit
  taskCard.addEventListener("dblclick", () => {
    taskCard.setAttribute("contenteditable", "true");
    taskCard.focus();
  });
  taskCard.addEventListener("blur", () => {
    taskCard.setAttribute("contenteditable", "false");
    if (taskCard.innerText.trim() === "") {
      alert("❌ You can't leave this blank. Please write something.");
      taskCard.innerText = "(Untitled Task)";
    }
  });

  taskWrapper.appendChild(taskCard);
  taskWrapper.appendChild(taskDlt);

  // insert just under the Todo heading
  const heading = todoBoard.querySelector("h3");
  if (heading) {
    todoBoard.insertBefore(taskWrapper, heading.nextSibling);
  } else {
    todoBoard.prepend(taskWrapper);
  }
});

// (Optional) If you had any hard-coded tasks without wrappers, you’d need to wrap them
// or attach drag events to those wrappers accordingly.
