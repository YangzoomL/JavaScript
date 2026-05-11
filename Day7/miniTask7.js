const tasks = [
  { title: "Learn JavaScript basics", completed: false },
  { title: "Practice DOM", completed: false },
  { title: "Build Todo UI", completed: true }
];

const todoList = document.querySelector("#todo-list");

tasks.forEach((task) => {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  li.innerHTML = `
    <span>${task.title}</span>
    <strong>${task.completed ? "Done" : "Pending"}</strong>
  `;

  todoList.appendChild(li);
});