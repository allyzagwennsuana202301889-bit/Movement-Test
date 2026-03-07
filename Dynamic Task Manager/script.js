let tasks = [];

//add task to list//
document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
});



//Delete function//
function renderTasks() { 
  
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#007bff';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '8px';
    deleteButton.style.width = 'fit-content';
    deleteButton.style.height = '30px';
    deleteButton.style.color = 'white';

    deleteButton.addEventListener('click', function() {
      tasks.splice(index, 1);
      renderTasks();
    }
    );
    li.appendChild(deleteButton);
    taskList.appendChild(li);

//Complete function//
    const completeButton = document.createElement('button');
    completeButton.textContent = task.completed ? '✔' : 'Complete';
    completeButton.style.backgroundColor = task.completed ? '#007bff' : '#c70000';
    completeButton.style.color = 'white';
    completeButton.style.border = 'none';
    completeButton.style.borderRadius = '8px';
    completeButton.style.width = 'fit-content';
    completeButton.style.height = '30px';
    completeButton.addEventListener('click', function() {
      task.completed = !task.completed;
      renderTasks();
    });
    li.appendChild(completeButton);
  });
}


// Prevent data loss on page refresh//
if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  renderTasks();
}

window.addEventListener('beforeunload', function() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
});



