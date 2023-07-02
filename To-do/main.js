document.addEventListener('DOMContentLoaded', function() {
    console.log('Organizer App is ready!');

    // Elements
    var taskID = 0;
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const tasksList = document.getElementById('taskList');

    // Add task
    addTaskButton.addEventListener('click', function() {
        const taskText = newTaskInput.value.trim();
        
        if (taskText) {
            const listItem = document.createElement('li');
            // listItem.classList.add(`removeButton${taskID}`);
            listItem.innerHTML = `
            <div id ="task${taskID}">
                <textarea rows="1", cols="35">${taskText}</textarea>                
                <button id="remove-${taskID}">Remove task</button>
            </div>            
            `;

            tasksList.appendChild(listItem);

            const selector = `#remove-${taskID}`;
            console.log(selector)
            const listButton = document.querySelector(selector);

            listButton.addEventListener('click', function() {
                listItem.remove();
            })

            taskID = taskID +1;

            // Clear the input field
            newTaskInput.value = '';
            newTaskInput.focus();
        }
    });
});