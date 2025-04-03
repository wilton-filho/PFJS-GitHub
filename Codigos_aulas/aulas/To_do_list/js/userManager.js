const deleteUser = (id, tasks) => {
    const index = tasks.findIndex(task => task.id === id);
    console.log(index);
    if (index !== -1) {
        tasks.splice(index, 1); // Remove the task from the array
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
        showTasks('listTasks'); // Refresh the displayed tasks
    } else {
        console.error('Task not found');
    }
}

const showTasks = (divId) => {
    const div = document.getElementById(divId);
    div.innerHTML = ''; // Clear the div content

    const tasks = getTasks(); // Retrieve tasks from local storage

    tasks.forEach((task,index,tasks) => {
        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = `
            <h3>Nome: ${task.name}</h3>
            <p>Status: ${task.status}</p>
        `;
        const button = document.createElement('button');
        button.textContent = "Deletar";
        button.onclick = () => deleteUser(task.id, tasks); // Set the onclick event to delete the user
        taskDiv.appendChild(button);
        div.appendChild(taskDiv);
    });
}

const addTasks = () => {
    if (localStorage.getItem('tasks') === null) localStorage.setItem('tasks', JSON.stringify([]));
    
    const tasks = JSON.parse(localStorage.getItem('tasks')); // Retrieve tasks from local storage
    tasks.push({ // Add a new task
        id: Date.now(),
        name: document.getElementById('taskName').value,
        status: document.getElementById('taskType').value
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update local storage
    document.getElementById('taskName').value = ''; // Clear the input field
    alert('Tarefa adicionada com sucesso!'); // Show success message
}

const getTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Retrieve tasks from local storage
    return tasks;
}

const tasks = {
    showTasks,
    addTasks
}

export default tasks;