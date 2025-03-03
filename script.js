// script.js

import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderSearchBar } from './components/SearchBar.js';
import { renderAddTaskForm } from './components/AddTaskForm.js';
import { renderTaskList } from './components/TaskList.js';
import { renderStats } from './components/Stats.js';

// App State
let tasks = [];
let currentView = 'All Tasks';

// Initialize Components
renderSidebar();
renderHeader(currentView);
renderSearchBar();
renderAddTaskForm();
renderTaskList(tasks);

// Add Task Functionality
window.addTask = () => {
    const taskInput = document.getElementById('todo-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');

    if (!taskInput.value.trim()) {
        alert('Please enter a task!');
        return;
    }

    const newTask = {
        id: Date.now().toString(), // Unique ID for each task
        title: taskInput.value.trim(),
        dueDate: dueDateInput.value || 'No Due Date',
        priority: priorityInput.value,
        completed: false,
    };

    tasks.push(newTask);
    renderTaskList(tasks);

    // Clear form fields
    taskInput.value = '';
    dueDateInput.value = '';
    priorityInput.value = 'low';
};

// Delete Task Functionality
window.deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    renderTaskList(tasks);
};

// Filter Tasks
window.setFilter = (filter) => {
    let filteredTasks = [];

    if (filter === 'all') {
        filteredTasks = tasks;
    } else if (filter === 'active') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    currentView = filter.charAt(0).toUpperCase() + filter.slice(1) + ' Tasks';
    renderHeader(currentView);
    renderTaskList(filteredTasks);
};

// Toggle Statistics
window.toggleStats = () => {
    const statsContainer = document.getElementById('stats');
    if (!statsContainer) {
        console.error("Stats container not found!");
        return;
    }

    if (statsContainer.classList.contains('hidden')) {
        const total = tasks.length;
        const completed = tasks.filter(task => task.completed).length;
        const pending = tasks.filter(task => !task.completed).length;

        renderStats({ total, completed, pending });
        statsContainer.classList.remove('hidden');
    } else {
        statsContainer.classList.add('hidden');
        statsContainer.innerHTML = '';
    }
};

// Search Tasks
window.searchTasks = () => {
    const searchInput = document.getElementById('search');
    const query = searchInput.value.trim().toLowerCase();

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(query)
    );

    renderTaskList(filteredTasks);
};