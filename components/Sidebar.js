// components/Sidebar.js
export function renderSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (!sidebarContainer) return;

    sidebarContainer.innerHTML = `
        <div class="p-4">
            <h1 class="text-2xl font-bold mb-4">Todo App</h1>
            <ul class="space-y-2">
                <li>
                    <a href="#" class="block p-2 rounded hover:bg-gray-200" onclick="setFilter('all')">
                        All Tasks
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-2 rounded hover:bg-gray-200" onclick="setFilter('active')">
                        Active Tasks
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-2 rounded hover:bg-gray-200" onclick="setFilter('completed')">
                        Completed Tasks
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-4 border-t">
            <button id="statsButton" class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onclick="toggleStats()">
                Show Statistics
            </button>
            <div id="stats" class="text-sm text-gray-600 mt-2 hidden"></div>
        </div>
    `;
}