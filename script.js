const task = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskListOl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask)

function addTask() {
    // Метод trim убирает лишние пробелы вначале и конце строки
    const taskName = task.value.trim();
    if (taskName) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent=`${taskName}`;
        li.appendChild(span);

        
        
        /* button */

        const buttonDone = document.createElement('button');
        buttonDone.textContent='Done';
        buttonDone.classList.add('btn-done');
        buttonDone.addEventListener('click', ()=>{li.classList.add('done')});
        li.appendChild(buttonDone);
        
        taskListOl.append(li);
    }
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    .then(response => response.json())
    .then(data => {
      data.forEach(todo => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todo.title;
        li.appendChild(span);
  
        const buttonDone = document.createElement('button');
        buttonDone.textContent = 'Done';
        buttonDone.classList.add('btn-done');
        buttonDone.addEventListener('click', () => {
          li.classList.add('done');
        });
        li.appendChild(buttonDone);
  
        taskListOl.appendChild(li);
      });
    })
    .catch(error => console.log(error));
}