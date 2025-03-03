// components/Stats.js
export function renderStats(stats) {
    const statsContainer = document.getElementById('stats');
    if (!statsContainer) return;

    statsContainer.innerHTML = `
        <p>Total Tasks: ${stats.total}</p>
        <p>Completed Tasks: ${stats.completed}</p>
        <p>Pending Tasks: ${stats.pending}</p>
    `;
    statsContainer.classList.remove('hidden');
}