const newTaskBtn = document.getElementById("new-task-button");
const form = document.getElementById("form");
const crossBtn = document.getElementById("cross-button");
const inputTitle = document.getElementById("input-title");
const inputDate = document.getElementById("input-date");
const inputDescription = document.getElementById("input-description");
const taskContainer = document.querySelector(".task-container");
const formBtn  = document.getElementById("form-button")

let taskArr = JSON.parse(localStorage.getItem("tasks")) ||  [];

const newTaskBtnHandler = () => {
  form.classList.remove("hide");
};

const updateTask = (id) => {
  for (const task of taskArr) {
    if (task.id === id) {
      task.title = inputTitle.value;
      task.date = inputDate.value;
      task.description = inputDescription.value;
    }
  }
  crossBtnHandler();
  renderUI();
}

const editTaskHandler = (id) => {
  const task = taskArr.find(task => task.id === id);
  form.classList.remove("hide");
  inputTitle.value = task.title;
  inputDate.value = task.date;
  inputDescription.value = task.description;
  formBtn.innerText = "Update Task";
  formBtn.removeEventListener("click", formHandler);
  formBtn.addEventListener("click", () => updateTask(task.id));
}

const deleteTaskHandler = (id) => {
  taskArr = [...taskArr.filter(task => task.id !== id)];
  renderUI();
}

const renderUI = () => {
  const stringHTML = taskArr.map((task) => {
    let date;
    if (task.date) {
      const [year, month, day] = task.date.split("-");
      date = `${day}-${month}-${year}`;
    } else {
      date = "";
    }
    return `
      <div class="task">
          <p><strong>Id: </strong> ${task.id}</p> 
          <p><strong>Title: </strong>${task.title}</p>
          <p><strong>Date: </strong>${date}</p>
          <p class="description">
            <strong>Description: </strong>${task.description}
          </p>
          <div class="task-controls">
            <button type="button" class="btn btn-small" onclick="deleteTaskHandler(${task.id})">Delete</button>
          </div>
        </div>
    `;
  });
  // <button type="button" class="btn btn-small" onclick="editTaskHandler(${task.id})">Edit</button>

  taskContainer.innerHTML = stringHTML;
  localStorage.setItem("tasks", JSON.stringify(taskArr));

};

if (taskArr) {
  renderUI();
}


const formHandler = (e) => {
  e.preventDefault();
  const title = inputTitle.value;
  const date = inputDate.value;
  const description = inputDescription.value;
  taskArr.push({
    id: Date.now(),
    title,
    date,
    description,
  });
  inputTitle.value = "";
  inputDate.value = "";
  inputDescription.value = "";
  crossBtnHandler();
  renderUI();
};



const crossBtnHandler = () => {
  form.classList.add("hide");
};

newTaskBtn.addEventListener("click", newTaskBtnHandler);
form.addEventListener("submit", formHandler);
crossBtn.addEventListener("click", crossBtnHandler);