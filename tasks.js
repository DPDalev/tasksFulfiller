window.onload = start;

function start() {
    let tasksArr = [];

    const tasksContainer = document.getElementById("tasksContainer");
    
    const workModeButton = document.getElementById("workModeButton");
    const addButton = document.getElementById("inputButton");

    workModeButton.addEventListener("click", () => {
        workMode(tasksArr);
    })
    workModeButton.style.display = "none";
    
    addButton.addEventListener("click", () => {
        let newTask = document.getElementById("task");
        let newNode = document.createElement("div");
        tasksArr.push(newTask.value.toUpperCase());
        newNode.innerHTML = newTask.value;
        newTask.value = "";
        
        // let inputTick = document.createElement("input");
        // inputTick.setAttribute("type", "checkbox");
        // inputTick.classList.add("checkBox");
        // newNode.appendChild(inputTick);
        
        tasksContainer.appendChild(newNode);

        workModeButton.style.display = "inline";
    })
}

function workMode(arr) {
    console.log("WORK MODE");
    console.log(arr)
    let taskContainer = document.getElementById("taskContainer");
    let tasksContainer = document.getElementById("tasksContainer");

    tasksContainer.style.display = "none";

    let currentTask = 0;

    let container = document.getElementById("container");

    document.getElementById("container").style.backgroundColor = "red"

    // container.addEventListener("click", () => {
    //     container.style.backgroundColor = "red";
    // })
    taskContainer.innerHTML = arr[currentTask];

    container.addEventListener("click", () => {
        if (currentTask >= arr.length) {
            taskContainer.innerHTML = "ПОЗДРАВЛЕНИЯ!!!";
            container.style.backgroundColor = "green";
            document.getElementById("newTasksListButton").style.display = "block";
            document.getElementById("newTasksListButton").addEventListener("click", () => {
                start();
            })
        } else {
            taskContainer.innerHTML = arr[currentTask];
            currentTask++;
        }
    })
    

    // let checkBoxesArr = document.getElementsByClassName("checkBox");
    // console.log(checkBoxesArr)
    // Array.from(checkBoxesArr).forEach(el => el.style.display = "inline");
    // Array.from(tasksContainer.children).forEach((el,i) => {
    //     if(i != 0) {
    //         el.style.display = "none";
    //     }
    // })

    document.querySelector("form").style.display = "none";
    workModeButton.style.display = "none";
}

function fulfilled() {
    document.getElementById("taskContainer").innerHTML = "ПОЗДРАВЛЕНИЯ!!!";

    console.log("FULFILLED!~!!")
}
