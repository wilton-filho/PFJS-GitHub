import tasks from "./userManager.js";

window.addEventListener('DOMContentLoaded', function() {
    const listTasks = document.getElementById('listTasks');
    tasks.showTasks(listTasks.id); // Show tasks in the user list div
});