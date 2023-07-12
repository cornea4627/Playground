document.addEventListener('DOMContentLoaded', function() {
    console.log('Organizer App is ready!');

    
    var cardID = 1;
    var taskID = 0;
    const main = document.querySelector("main");
    const section = document.createElement('section');
    main.append(section);
    section.innerHTML = `
        <button id="addCardButton">Add a new card</button>
        <select id="cardTypeSelection">
            <option>To-Do List</option>
            <option>Address Book</option>
            <option>Bookmarks</option>
        </select>
    `;

    const addCardButton = document.getElementById('addCardButton');
    const cardTypeSelection = document.getElementById('cardTypeSelection');
    

    const deck = document.createElement('div');
    deck.classList.add('deck');
    section.append(deck);

    

   // add new card
    addCardButton.addEventListener('click', function() {
        if (cardTypeSelection.value === "To-Do List") {
            addTodo();
        } else if (cardTypeSelection.value === "Address Book") {
            addContact();
        }
        
    });

    // functions
    
    const addTodo = function () {
        const todo = document.createElement('div');
        todo.classList.add('card');
        todo.innerHTML = `
            <h2>To-Do List ${cardID} <button id="removeCard${cardID}">Remove Card</button></h2>
            <input type="text" id="new-task${cardID}" placeholder="${cardID} New task...">
            <button id ="add-task${cardID}">ADD</button>
            <ul class="classlist${cardID}"></ul>
        `;
        deck.append(todo);

        const removeCardButton = document.getElementById(`removeCard${cardID}`);
        removeCardButton.addEventListener(`click`, function () {
            todo.remove();
        });



        const newTaskInput = document.getElementById(`new-task${cardID}`);
        const addTaskButton = document.getElementById(`add-task${cardID}`);
        const taskList = document.querySelector(`.classlist${cardID}`);

        addTaskButton.addEventListener('click', function () {
            const taskText = newTaskInput.value.trim();

            if (taskText !="") {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <div>
                        <textarea rows="1", cols="35">${taskText}</textarea>
                        <button id="remove-${taskID}">Remove Task</button>
                        <p> task id ${taskID}</p>
                    </div>
                `;
                taskList.append(listItem);

                const removeTaskButton = document.getElementById(`remove-${taskID}`);
                removeTaskButton.addEventListener(`click`, function () {
                    listItem.remove();
                });            
                newTaskInput.value = '';
                taskID++;
            };
        });    
        cardID++;
    }
    const addContact = function () {
        const contacts = document.createElement('div');
        contacts.innerHTML = `<h1>address book goes here ${cardID} <button id="removeCard${cardID}">Remove Card</button></h1>`;
        contacts.classList.add('card')
        deck.append(contacts);
        




        const removeCardButton = document.getElementById(`removeCard${cardID}`);
        removeCardButton.addEventListener(`click`, function () {
            contacts.remove();
        });
        
        cardID++;
    }

});







