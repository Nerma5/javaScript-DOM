const taskInput = document.querySelector("#new-task");
const addedTask = document.querySelector("#all-task");
const batnAdd = document.querySelector("#create-task");

const newItem = (text) => {
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML = `
    <p href="#" class="text">${text}</p>
    <button class="delete-button">Delete</button>`;
  return task;
};

batnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (taskInput.value.length > 2) {
    addedTask.appendChild(newItem(taskInput.value));
    taskInput.value = "";
  } else {
    alert("unesite nesto");
  }
});
