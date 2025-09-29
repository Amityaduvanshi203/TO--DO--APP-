let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskDateTime = document.getElementById("taskDateTime");
let taskList = document.getElementById("taskList");

// Add Task
addBtn.addEventListener("click", function() {
  let taskText = taskInput.value.trim();
  let taskTime = taskDateTime.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;

  let datetimeSpan = document.createElement("span");
  datetimeSpan.classList.add("datetime");
  if (taskTime) {
    datetimeSpan.textContent = ` (${taskTime})`;
  }

  // Buttons
  let btnDiv = document.createElement("div");
  btnDiv.classList.add("task-buttons");

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.classList.add("complete");
  completeBtn.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // Edit button
  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  editBtn.addEventListener("click", function() {
    let newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask;
    }
  });

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", function() {
    li.remove();
  });

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(editBtn);
  btnDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(datetimeSpan);
  li.appendChild(btnDiv);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
});
