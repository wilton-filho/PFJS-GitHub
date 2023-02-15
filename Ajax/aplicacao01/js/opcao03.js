// Opção 3: A partir da biblioteca axios

function getTxtOp03() {
    axios.get('bd.txt')
        .then(response => {
            document.getElementById("txtMsg").innerHTML = response.data + " (opção 03)"
        })
        .catch(error => {
            console.log(error);
        });
}