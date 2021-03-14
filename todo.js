const todos = [
    'one',
    'two',
    'three'
];

setTodosDiv();

function setTodosDiv() {
    var todosDiv = document.getElementsByClassName('todos-holder')[0];
    
    todosDiv.innerHTML = Todos();
}

function Todo(text) {
    return (
        '<li>' + text + '</li>'
    );
}

function Todos() {
    var finalTodos = '';

    todos.forEach(todo => {
        finalTodos += Todo(todo);
    });

    return (
        '<ul class="todos">' + finalTodos + '</ul>'
    );
}