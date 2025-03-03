// components/AddTaskForm.js
export function renderAddTaskForm() {
    const addTaskFormContainer = document.getElementById('add-task-form-container');
    if (!addTaskFormContainer) return;

    addTaskFormContainer.innerHTML = `
        <form id="todo-form" class="mb-6">
            <div class="flex mb-3">
                <input type="text" id="todo-input" placeholder="What needs to be done?" 
                       class="flex-grow p-3 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <button type="submit" 
                        class="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Add Task
                </button>
            </div>
            <div class="flex space-x-3">
                <input type="date" id="due-date" class="p-2 border rounded-md">
                <select id="priority" class="p-2 border rounded-md">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </div>
        </form>
    `;
}