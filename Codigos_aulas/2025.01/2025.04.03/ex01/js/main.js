import usuarios from './users.js';
import manageUsers from './manageUsers.js';
// import {showAllUsers} from './manageUsers.js'

window.addEventListener("DOMContentLoaded", () => {
    manageUsers.showAllUsers(usuarios);
    manageUsers.showUsersGender(usuarios, "M");
    // showAllUsers(usuarios);
});