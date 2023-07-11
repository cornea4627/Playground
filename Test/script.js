document.addEventListener('DOMContentLoaded', function() {
    console.log('Organizer App is ready!');

    
    var cardID = 0;
    var taskID = 0;
    const main = document.querySelector("main");
    const section = document.createElement('section');
    main.append(section);
    section.innerHTML = `
        <button id="addCard">Add a new card</button>
    `;

    const addCardButton = document.getElementById('addCard');


    const deck = document.createElement('div');
    deck.classList.add('deck')
    section.append(deck);

    

   // add new card
   addCardButton.addEventListener('click', function() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>To-Do List</h2>
        <input type="text" id="new-task${taskID} placeholder="${cardID} New task...">
        <button id ="add-task${cardID}">ADD</button>
        <ul class="classlist"></ul>
    `;
    deck.append(card);

    const newTaskInput = document.getElementById(`new-task${taskID}`);
    const addTaskButton = document.getElementById(`add-task${cardID}`); // i can also try using the last child query on the deck
    
    addTaskButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();

    });


    
    cardID = cardID + 1;
   });





});



