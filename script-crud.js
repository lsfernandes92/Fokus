const btnAddTask = document.querySelector(".app__button--add-task");
const btnCancelTask = document.querySelector(".app__form-footer__button--cancel");
const formAddTask = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");
const ulTasks = document.querySelector(".app__section-task-list");
const activeTaskDescription = document.querySelector(".app__section-active-task-description");
let selectedTask = null;
let liSelectedTask = null;

const taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function clearForm() {
  textArea.value = "";
  formAddTask.classList.toggle("hidden");
}

function updateTasks() {
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addTaskElement(task) {
  const li = document.createElement("li");
  li.classList.add("app__section-task-list-item");

  const svg = document.createElement("svg");
  svg.innerHTML = `
    <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
      <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
    </svg>
  `

  const p = document.createElement("p");
  p.textContent = task.description;
  p.classList.add("app__section-task-list-item-description");

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("app_button-edit");

  btnEdit.onclick = () => {
    const newDescription = prompt("Enter the text you want to edit:");
    if (newDescription === null) {
      return;
    }

    if (newDescription) {
      p.textContent = newDescription;
      task.description = newDescription;
      updateTasks();
    }
  };

  const img = document.createElement("img");
  img.setAttribute("src", "imagens/edit.png");
  btnEdit.append(img);

  li.append(svg);
  li.append(p);
  li.append(btnEdit);

  li.onclick = () => {
    document.querySelectorAll(".app__section-task-list-item-active")
      .forEach(element => {
        element.classList.remove("app__section-task-list-item-active");
      })

    if (selectedTask == task) {
      activeTaskDescription.textContent = "";
      selectedTask = null;
      liSelectedTask = null;
      return;
    }

    selectedTask = task;
    liSelectedTask = li;

    activeTaskDescription.textContent = task.description;
    li.classList.add("app__section-task-list-item-active");
  };

  return li;
}

btnAddTask.addEventListener("click", () => {
  formAddTask.classList.toggle("hidden");
});

formAddTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = {
    description: textArea.value
  }
  taskList.push(task);
  const taskElement = addTaskElement(task);
  ulTasks.append(taskElement);
  updateTasks();
  textArea.value = "";
  formAddTask.classList.add("hidden");
});

btnCancelTask.addEventListener("click", clearForm);

taskList.forEach(task => {
  const taskElement = addTaskElement(task)
  ulTasks.append(taskElement)
});

document.addEventListener("FocusFinished", () => {
  if (selectedTask && liSelectedTask) {
    liSelectedTask.classList.remove("app__section-task-list-item-active");
    liSelectedTask.classList.add("app__section-task-list-item-complete");
    liSelectedTask.querySelector("button").setAttribute("disabled", true);
  }
});