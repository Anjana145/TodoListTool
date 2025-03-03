// components/TaskList.js
export function renderTaskList(tasks) {
    const taskListContainer = document.getElementById('task-list-container');
    if (!taskListContainer) return;

    taskListContainer.innerHTML = tasks.map(task => `
        <li class="bg-white p-4 rounded-md shadow-sm flex justify-between items-center">
            <div>
                <span class="font-medium">${task.title}</span>
                <div class="text-sm text-gray-500">${task.dueDate} | Priority: ${task.priority}</div>
            </div>
            <button class="text-red-500 hover:text-red-700" onclick="deleteTask('${task.id}')">
                <i class="fas fa-trash"></i>
            </button>
        </li>
    `).join('');
}