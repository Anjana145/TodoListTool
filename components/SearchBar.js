// components/SearchBar.js
export function renderSearchBar() {
    const searchBarContainer = document.getElementById('search-bar-container');
    if (!searchBarContainer) return;

    searchBarContainer.innerHTML = `
        <input type="text" id="search" placeholder="Search tasks" 
               class="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
    `;
}