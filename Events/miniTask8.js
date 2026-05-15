const taskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

const addTask = () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;
  li.classList.add("todo-item");

  todoList.appendChild(li);

  taskInput.value = "";
};

addButton.addEventListener("click", addTask);// Add event listener to the add button