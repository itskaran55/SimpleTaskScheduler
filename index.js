let taskInput = document.querySelector('.task');  
let priorityInput = document.querySelector('.priority');  
let datesInput = document.querySelector('.dates');
let taskItem = document.querySelector('.taskItem');
let priorityItem = document.querySelector('.priorityItem');
let dateItem = document.querySelector('.dateItem');

function fetchData() {
    const task = taskInput.value;
    const dateVal = datesInput.value;  
    const priority = priorityInput.value;
    
    if(task.trim() === "" || dateVal === "" || !priority) {
        alert("Please fill out all fields.");
        return; //If we not select date or enter task value it will not appear
    }

    const currentDate = new Date();
    console.log(`Current Date : ${currentDate}`);
    const selectedDate = new Date(dateVal)
    console.log(`Selected Date : ${selectedDate}`);

    if(selectedDate < currentDate) {
        alert("Please select an upcoming date")
        return;
    }

    // Task Data

    let data = document.querySelector('.data')
    const taskData = document.createElement('div')
    taskData.className = "tasks"
    taskData.innerHTML = `
    <p>Task : ${task.trim()}</p>
    <p>Priority : ${priority}</p>
    <p>Deadline : ${dateVal}</p>
    <button class='cbtn'>Complete</button>
    `;
    data.appendChild(taskData)

    taskInput.value = '';
    // priorityInput.value = '';
    datesInput.value = '';

    taskData.querySelector('.cbtn').addEventListener('click',function(){
        markCompleted(taskData)
    });

    function markCompleted(ele) {
       ele.remove() 
    }

}