
function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props);

}

function createTodoItem(title){
    const checkbox = createElement('input', {type: 'checkbox', className: 'checkbox'});
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const label = createElement('label');
    label.innerText = title;
    label.className = 'title';

    const editInput = createElement('input');
    editInput.type = 'text';
    editInput.className = 'textfield';

    const editButton = createElement('button');
    editButton.innerText = 'Edit';
    editButton.className = 'edit';

    const deleteButton = createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    bindEvent(listItem);

    return listItem;
}

function bindEvent(todoItem) {
    const checkbox = todoItem.querySelector('.checkbox');
    const editButton = todoItem.querySelector('button.edit');
    const deleteButton = todoItem.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function addTodoItem(event) {
    event.preventDefault();

    if(addInput.value === '') return alert('Need to input task');

    const todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = '';
}

function toggleTodoItem() {
    const listItem = this.parentNode;
    listItem.classList.toggle('completed');
}

function editTodoItem() {
    const listItem = this.parentNode;
    const title = listItem.querySelector('.title');
    const editInput = listItem.querySelector('.textfield');
    const isEditing = listItem.classList.contains('editing');
    if(isEditing){
        title.innerText = editInput.value;
        this.innerText = "Edit";
    }else{
        editInput.value = title.innerText;
        this.innerText = "Save";
    }

    listItem.classList.toggle('editing');
}

function deleteTodoItem() {
    const listItem = this.parentNode;
    todoList.removeChild(listItem);
}

const todoFrom = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

function main(){
    todoFrom.addEventListener('submit', addTodoItem);
    todoItems.forEach(item => bindEvent(item));
}

main();

