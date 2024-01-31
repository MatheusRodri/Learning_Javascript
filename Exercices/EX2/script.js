let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('@list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';

    todos.map((todo)=>{
        let liElement = document.createElement('li');
        let textElement = document.createTextNode(todo);
        
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');

        linkText = document.createTextNode('Remove');
        linkElement.appendChild(linkText);

        let position = todos.indexOf(todo);
        linkElement.setAttribute('onclick',`removeTodos(${position})`);

        liElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    })
}

function addTodos(){
    if(inputElement.value === ''){
       alert('Digite uma tarefa');

       return false;
    }else{
        let newTask = inputElement.value;

        todos.push(newTask);
        inputElement.value = '';
        inputElement.focus();
        saveToStorage();
        renderTodos();
    }
}

function removeTodos(pos){
    todos.splice(pos,1);
    saveToStorage();
    renderTodos();
}

function saveToStorage(){
    localStorage.setItem('@list_todos',JSON.stringify(todos));
}

renderTodos();
buttonElement.onclick = addTodos;