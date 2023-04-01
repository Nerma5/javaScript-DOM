const taskInput = document.querySelector("#new-task");
const addedTask = document.querySelector("#all-task");
const batnAdd = document.querySelector("#create-task");

const newItem = (text) => {
  const task = document.createElement("li");
  task.className = "task";

  task.innerHTML = `
    <p href="#" class="text">${text}</p>
    <button class="delete-button">Delete</button>`;

  const deleteButton = task.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    task.remove();
  });
  addedTask.appendChild(task);
  deleteButton.style.border = "none";
  deleteButton.style.padding = "5px";
  return task;
};

batnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (taskInput.value.length > 1) {
    addedTask.appendChild(newItem(taskInput.value));
    taskInput.value = "";
  } else {
    alert("unesite nesto");
  }
});
