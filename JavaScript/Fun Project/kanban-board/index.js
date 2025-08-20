const addTaskBtn = document.getElementById("add-task-btn");

const todoBoard = document.getElementById("todo-board");

const addBoard = document.getElementById("bAdd"); // + button
const mainContainer = document.getElementById("boards");
const h3Tag = document.getElementById("myHeading");

// Boards add
addBoard.addEventListener("click", () => {
  const creDiv = document.createElement("div");
  const creDtl = document.createElement("button");
  creDtl.innerText = "x";
  creDtl.style.cursor = "pointer";

  creDiv.classList.add("board");

  creDiv.addEventListener("dragover", (e) => {
    e.preventDefault(); // allow dropinng

    const flyingItems = document.querySelector(".flying");
    if (!flying) return;

    // const heads

    if (flyingItems) {
      creDiv.appendChild(flyingItems);
    }
  });

  // mainContainer.appendChild(creDiv);
  // find parent and insert before the "+" button’s parent div

  mainContainer.insertBefore(creDiv, addBoard.parentElement);

  // card title
  const cloneh3 = h3Tag.cloneNode(true);
  cloneh3.innerHTML = prompt("Enter Title");
  creDiv.appendChild(cloneh3);

  // delete button
  creDiv.appendChild(creDtl);
  creDtl.addEventListener("click", () => {
    creDiv.remove();
  });
});

// add task button

addTaskBtn.addEventListener("click", () => {
  const input = prompt("Add your task");
  if (!input) return;

  // Create wrapper for task + delete icon
  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("task-wrapper");
  taskWrapper.setAttribute("draggable", true);
  attachDragEvents(taskWrapper);

  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  // taskCard.setAttribute("draggable", true);
  taskCard.innerText = input;

  // create delete button
  const taskDlt = document.createElement("button");
  taskDlt.innerHTML = "Delete";
  taskDlt.style.cursor = "pointer";
  taskDlt.style.marginLeft = "10px";

  // editing function handeling

  taskCard.addEventListener("dblclick", () => {
    taskCard.setAttribute("contenteditable", "true");
    taskCard.focus(); // doubleclick ke bad ye instantly editable bange and ready to edit without extra click
  });

  taskCard.addEventListener("blur", () => {
    taskCard.setAttribute("contenteditable", false);
    // blur → automatically save/exit edit mode when the user clicks outside, so tasks don’t stay editable forever.

    // Check after editing is done
    if (taskCard.innerText.trim() === "") {
      alert("❌ You can't leave this blank. Please write something.");
      taskCard.innerText = "(Untitled Task)";
    }
  });

  taskDlt.addEventListener("click", () => {
    // taskCard.remove();
    // taskDlt.remove();
    taskWrapper.remove();
  });

  taskWrapper.appendChild(taskCard);
  taskWrapper.appendChild(taskDlt);

  // todoBoard.prepend(taskWrapper);
  const heading = todoBoard.querySelector("h3");

  todoBoard.insertBefore(taskWrapper, heading.nextSibling);
});

//  hard coded karke jo likha tha items. ukse liye ye code

// const allItems = document.querySelectorAll(".item");
// // for hard codeed items
// allItems.forEach(attachDragEvents);
// allItems.forEach((item) => attachDragEvents(item));  // thsi two line of code are same but diffrent way

// card Drag helper
function attachDragEvents(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });
  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

// deagOver
const allBoards = document.querySelectorAll(".board");
allBoards.forEach((board) => {
  board.addEventListener("dragover", () => {
    const flyingItems = document.querySelector(".flying");
    if (flyingItems) {
      // board.prepend(flyingItems);
      const heading = board.querySelector("h3");
      board.insertBefore(flyingItems, heading.nextSibling);
    }
  });
});
