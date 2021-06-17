showTodos();

function showTodos() {
    var todosDiv = document.getElementsByClassName('todos-holder')[0];

    todosDiv.innerHTML = '<ul>' + todosHtml() + '</ul>';
}

function todosHtml() {
    var todos = findTodos();

    //  reverse function is a problem...
    return todos.reduce(function (acc, todo, index) {
        return acc += '<li id="todo-' + index + '">' + todo + ' <button class="delete-todo-btn" data-todoid="' + index + '">delete</button></li>'
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
//  cant delete after adding a new one...probably cuz there arent event listeners on them
var deleteTodoBtns = document.getElementsByClassName('delete-todo-btn');
Array.from(deleteTodoBtns).forEach(btn => {
    btn.addEventListener('click', function (e) {
        var todoId = e.target.dataset.todoid;
    
        deleteTodo(todoId);
    });
});

//  doesn't really delete the last one
function deleteTodo(todoId) {
    var todos = findTodos();

    var newTodos = todos.filter(function (todo, index) {
        return index !== Number(todoId)
    });

    console.log(newTodos)

    saveTodos(newTodos);
    deleteTodoDOM(todoId);
}

function deleteTodoDOM(todoId) {
    document.getElementById('todo-' + todoId).remove();
}