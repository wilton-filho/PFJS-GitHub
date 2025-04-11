import ajax from './ajax.js';

window.addEventListener("DOMContentLoaded", () => {
    // Chama as funções de requisição AJAX

    // AJAX - XMLHttpRequest
    ajax.getUsersXMLHttpRequest();
    
    // AJAX - Fetch .then
    ajax.getUsersFetch();
    
    // AJAX - Fetch async/await
    ajax.getUsersFetchAsync();
})