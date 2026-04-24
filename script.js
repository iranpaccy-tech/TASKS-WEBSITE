let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  const list = document.getElementById("taskList");
  const counter = document.getElementById("counter");

  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.done) li.classList.add("completed");

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <button class="delete" onclick="deleteTask(${index})">X</button>
    `;

    list.appendChild(li);
  });

  counter.textContent = tasks.length + " tasks";
  save();
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;

  tasks.push({ text: input.value, done: false });
  input.value = "";
  render();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  render();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  render();
}

function clearAll() {
  tasks = [];
  render();
}

render();