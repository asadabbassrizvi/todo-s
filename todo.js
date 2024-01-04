const inputBox = document.getElementById("enterInput");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".clearbutton");
let tasks = [];
// onkeyup event
inputBox.onkeyup = () => {
  let userEnteredValue = inputBox.value; //getting user entered value
  if (userEnteredValue && userEnteredValue.trim()) {
    //if the user value isn't only spaces
    addBtn.classList.add("active"); //active the add button
  } else {
    addBtn.classList.remove("active"); //unactive the add button
  }
};

showTasks(); //calling showTask function

addBtn.onclick = (e) => {
  //when user click on plus icon button
  const obj = {
    isCompleted: true,
    value: null,
  };
  obj.value = inputBox.value; //getting input field value
  listArray = []; //create a blank array

  tasks.push(obj); //pushing or adding new value in array
  showTasks(); //calling showTask function

  addBtn.classList.remove("active"); //unactive the add button once the task added
};

inputBox.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    if (inputBox.value && inputBox.value !== "") {
      const obj = {
        isCompleted: false,
        value: null,
      };
      obj.value = inputBox.value; //getting input field value
      listArray = []; //create a blank array

      tasks.push(obj); //pushing or adding new value in array
      showTasks();
    }
  }
});

function showTasks() {
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = tasks.filter(
    (data) => !data.isCompleted
  ).length; //passing the array length in pendingtask
  if (tasks.length > 0) {
    deleteAllBtn.classList.add("active"); //active the delete button
  } else {
    deleteAllBtn.classList.remove("active"); //unactive the delete button
  }
  let newLiTag = "";
  tasks.forEach((element, index) => {
    if (element.isCompleted) {
      newLiTag += `<li><input type="checkbox" checked  onclick="onChangeCheckBoxValue(${index})"> <label>${element.value}</label> <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    } else {
      newLiTag += `<li><input type="checkbox"  onclick="onChangeCheckBoxValue(${index})"> <label>${element.value}</label> <span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    }
  });
  todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
  inputBox.value = ""; //once task added leave the input field blank
}
function onChangeCheckBoxValue(index) {
  console.log(index);
  tasks[index].isCompleted = !tasks[index].isCompleted;
  showTasks();
}
// delete task function
function deleteTask(index) {
  tasks.splice(index, 1); //delete or remove the li
  showTasks(); //call the showTasks function
}

// delete all tasks function
deleteAllBtn.onclick = () => {
  tasks = [];
  showTasks(); //call the showTasks function
};
