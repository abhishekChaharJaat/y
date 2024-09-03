let taskInput = document.getElementById("task-input");
let tasks = document.getElementById("tasks");

const addTask = () => {
  let val = taskInput.value;

  if (val === "") {
    alert("please enter your task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = val;
    tasks.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    tasks.appendChild(span);
  }
  taskInput.value = "";
  saveData();
};

tasks.addEventListener("click", function (ele) {
  if (ele.target.tagName === "LI") {
    ele.target.classList.toggle("checked");
    saveData();
  }
  if (ele.target.tagName === "SPAN") {
    ele.target.previousSibling.remove();
    ele.target.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", tasks.innerHTML);
};

const showTask = () => {
  tasks.innerHTML = localStorage.getItem("data");
};

showTask();
