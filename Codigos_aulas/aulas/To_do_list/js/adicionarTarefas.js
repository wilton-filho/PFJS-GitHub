import tasks from "./userManager.js";

window.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addTaskButton').addEventListener('click', () => tasks.addTasks());
});