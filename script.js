
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const dueDateInput = document.getElementById('due-date');
const prioritySelect = document.getElementById('priority');
const searchInput = document.getElementById('search');
const statsDiv = document.getElementById('stats');
const currentViewTitle = document.getElementById('current-view');

let todos = JSON.parse(localStorage.getItem('todos')) || [];
let currentFilter = 'all';

function renderTodos() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredTodos = todos.filter(todo => {
        const matchesSearch = todo.text.toLowerCase().includes(searchTerm);
        const matchesFilter = 
            currentFilter === 'all' || 
            (currentFilter === 'active' && !todo.completed) ||
            (currentFilter === 'completed' && todo.completed);
        return matchesSearch && matchesFilter;
    });

    todoList.innerHTML = '';
    filteredTodos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `bg-white p-4 rounded-lg shadow-md ${todo.priority === 'high' ? 'border-l-4 border-red-500' : todo.priority === 'medium' ? 'border-l-4 border-yellow-500' : ''}`;
        li.innerHTML = `
            <div class="flex items-center">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} class="mr-3" onchange="toggleTodo(${index})">
                <div class="flex-grow">
                    <p class="${todo.completed ? 'line-through text-gray-500' : ''}">${todo.text}</p>
                    <p class="text-sm text-gray-500">${todo.dueDate || 'No due date'} | Priority: ${todo.priority}</p>
                </div>
                <button onclick="editTodo(${index})" class="text-blue-500 hover:text-blue-700 mr-2">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteTodo(${index})" class="text-red-500 hover:text-red-700">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });

    updateStats();
}

function addTodo(text, dueDate, priority) {
    todos.push({ text, completed: false, dueDate, priority });
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

function editTodo(index) {
    const newText = prompt('Edit task:', todos[index].text);
    if (newText !== null) {
        todos[index].text = newText;
        localStorage.setItem('todos', JSON.stringify(todos));
        renderTodos();
    }
}

function updateStats() {
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.completed).length;
    const activeTasks = totalTasks - completedTasks;

    statsDiv.innerHTML = `
        <p><strong>Total:</strong> ${totalTasks}</p>
        <p><strong>Active:</strong> ${activeTasks}</p>
        <p><strong>Completed:</strong> ${completedTasks}</p>
    `;
}

function setFilter(filter) {
    currentFilter = filter;
    currentViewTitle.textContent = `${filter.charAt(0).toUpperCase() + filter.slice(1)} Tasks`;
    renderTodos();
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = todoInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = prioritySelect.value;
    if (text) {
        addTodo(text, dueDate, priority);
        todoInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
    }
});

searchInput.addEventListener('input', renderTodos);

renderTodos();