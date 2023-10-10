let tasks = [];

function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
}
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        renderTasks();
    }
    saveTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    const filter = document.getElementById("filter").value;

    tasks.forEach((task, index) => {
        if (filter == "all" || (filter == "completed" && task.completed) || (filter == "incomplete" && !task.completed)) {
            const li = document.createElement("li");
            li.innerHTML = `
        ${task.text}
        <button class="edit" onclick="editTask(${index})">Edit</button>
        <button class="edit"onclick="deleteTask(${index})">Delete</button>
        <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">
    `;
            taskList.appendChild(li);
        }
        saveTasks();
    });

}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();

}

function editTask(index) {
    const newText = prompt("Edit task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        renderTasks();
    }
    saveTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
    saveTasks();
}

function filterTasks() {
    renderTasks();

}
renderTasks();
loadTasks();

