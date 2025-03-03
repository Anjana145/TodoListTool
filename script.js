// script.js
import { renderSidebar } from './components/Sidebar.js';
import { renderHeader } from './components/Header.js';
import { renderSearchBar } from './components/SearchBar.js';
import { renderAddTaskForm } from './components/AddTaskForm.js';
import { renderTaskList } from './components/TaskList.js';
import { renderStats } from './components/Stats.js';

let tasks = [];
let currentView = 'All Tasks';

// Initialize components
renderSidebar();
renderHeader(currentView);
renderSearchBar();
renderAddTaskForm();
renderTaskList(tasks);

// Event handlers
window.setFilter = (filter) => {
    currentView = filter.charAt(0).toUpperCase() + filter.slice(1) + ' Tasks';
    renderHeader(currentView);
};

window.toggleStats = () => {
    const stats = {
        total: tasks.length,
        completed: tasks.filter(task => task.completed).length,
        pending: tasks.filter(task => !task.completed).length,
    };
    renderStats(stats);
};

window.deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
    renderTaskList(tasks);
};