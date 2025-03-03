// components/Header.js
export function renderHeader(currentView) {
    const headerContainer = document.getElementById('header-container');
    if (!headerContainer) return;

    headerContainer.innerHTML = `
        <h2 class="text-2xl font-bold mb-4" id="current-view">${currentView}</h2>
    `;
}