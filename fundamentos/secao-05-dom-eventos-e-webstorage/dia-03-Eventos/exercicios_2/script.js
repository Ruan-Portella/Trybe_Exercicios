const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

const createDaysOfTheMonth = () => {
    let getDaysList = document.querySelector("#days");

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let day = decemberDaysList[index];
        let dayItem = document.createElement('li');
        dayItem.innerHTML = day;
        
        if (day === 24 || day === 31) {
            dayItem.className = 'day holiday';
            getDaysList.appendChild(dayItem);
        } else if (day === 4 || day === 11 || day === 18) {
            dayItem.className = 'day holiday friday';
            getDaysList.appendChild(dayItem);
        } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            getDaysList.appendChild(dayItem);
        } else {
            dayItem.className = 'day';
            getDaysList.appendChild(dayItem);
        }
    }
}

createDaysOfTheMonth();

const createHolidayButton = (buttonName) => {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;

    buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

const displayHolidays = () => {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    getHolidayButton.addEventListener('click', () => {
        for (let index = 0; index < getHolidays.length; index += 1) {
           if (getHolidays[index].getElementsByClassName.backgroundColor === setNewColor) {
            getHolidays[index].style.backgroundColor = backgroundColor;
           } else {
            getHolidays[index].style.backgroundColor = setNewColor;
           }
            
        }
    })
}

displayHolidays();

const createFridayButton = (buttonName) => {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-friday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
}

createFridayButton('Sexta-Feira');

const displayFridays = (fridaysArray) => {
    let getFridayButton = document.querySelector('#btn-friday');
    let fridays = document.getElementsByClassName('friday');
    let newFridayText = 'SEXTOU o/';

    getFridayButton.addEventListener('click', () => {
        for (let index = 0; index < fridays.length; index += 1) {
            if (fridays[index].innerHTML !== newFridayText) {
                fridays[index].innerHTML = newFridayText;
            } else { 
                fridays[index].innerHTML = fridaysArray[index];
            }
        }
    })
}

let decemberFridays = [4, 11, 18, 25];
displayFridays(decemberFridays);

const dayMouseOver = () => {
    let days = document.querySelector('#days');
    days.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    });
}

    const dayMouseOut = () => {
        let days = document.querySelector('#days');
        days.addEventListener('mouseout', (event) => {
            event.target.style.fontSize = '20px';
            event.target.style.fontWeight = '200';
        });
    }

dayMouseOver();
dayMouseOut();

const newTaskSpan = (task) => {
    let tasksContainer = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');

    taskName.innerHTML = task;
    tasksContainer.appendChild(taskName);
}

newTaskSpan('projeto');

const newTaskDiv = (color) => {
    let tasksContainer = document.querySelector('.my-tasks');
    let newTask = document.createElement('div');

    newTask.clasName = 'task';
    newTask.style.backgroundColor = color;
    tasksContainer.appendChild(newTask);
}

newTaskDiv('green');



const setDayColor = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', (event) => {
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor; 
        event.target.style.color = color; 
      } else if (eventTargetColor === taskColor) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  }

  setDayColor();

  const setTaskClass = () => {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
    myTasks.addEventListener('click', (event) => {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  }

  setTaskClass();


  const addNewTask = () => {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', () => {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    });
  
    getInputField.addEventListener('keyup', (event) => {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  }
  
  addNewTask();
  