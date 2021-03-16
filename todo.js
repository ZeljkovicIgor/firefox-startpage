showTodos();

function showTodos() {
    var todosDiv = document.getElementsByClassName('todos-holder')[0];

    todosDiv.innerHTML = '<ul>' + todosHtml() + '</ul>';
}

function todosHtml() {
    var todos = findTodos();

    return todos.reverse().reduce((acc, todo) => {
        return acc += '<li>' + todo + '</li>'
    }, '');
}

var newTodoButton = document.getElementById('new-todo-button');
newTodoButton.addEventListener('click', function (e) {
    var text = document.getElementById('new-todo-text').value;

    addTodo(text);
});

function addTodo(value) {
    var allTodos = findTodos();

    allTodos.push(value);

    saveTodos(allTodos);
    showTodos();
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function findTodos() {
    var todos = localStorage.getItem('todos');

    if (!todos) {
        localStorage.setItem('todos', JSON.stringify([]));

        findTodos();
    }

    return JSON.parse(todos);
}

// update
// delete