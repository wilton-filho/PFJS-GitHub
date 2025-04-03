// Nesse caso, usuarios deve ter o mesmo nome de como foi exportado no arquivo "usuarios_op1.js"
import {usuarios} from './usuarios_op1.js'

// Ou se preferir, pode ser renomeado assim
// import {usuarios as user} from './usuarios_op1.js'

window.addEventListener('DOMContentLoaded', function() {
    console.log(usuarios);
    //console.log(user);
});