var tasks = [
];


var container = document.querySelector('ul#tasks');
var inputSelector = document.querySelector('#task');

function addTask(){
  if (inputSelector.value === ''){
    return alert('Digite sua tarefa');
  }
  tasks.push(inputSelector.value);
  console.log(tasks);
  renderTasks();
}

function renderTasks(){
  container.innerHTML = '';
  for (task of tasks){
    var taskItem = document.createElement('li');
    var taskText = document.createTextNode(task);
    
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode('     Excluir');
    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');

    var pos = tasks.indexOf(task);
    linkElement.setAttribute('onclick', 'deleteTask('+pos+')');
    
    taskItem.appendChild(taskText);
    taskItem.appendChild(linkElement);
    container.appendChild(taskItem);
    
    clearValue(inputSelector);
  }
}

function clearValue(element){
  element.value = '';
}

function deleteTask(pos){
  tasks.splice(pos, 1);
  renderTasks();
}