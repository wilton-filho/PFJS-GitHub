// Opção 3: A partir da biblioteca axios

function getTxtOp03() {
    const axios = require('axios');

    axios.get('bd.txt')
        .then(response => {
            cdocument.getElementById("txtMsg").innerHTML = response.data + " (opção 03)"
        })
        .catch(error => {
            console.log(error);
        });
}