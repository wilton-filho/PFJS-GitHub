const fetchData = () => {
    fetch('https://wilton-filho.github.io/PFJS-GitHub/Codigos_aulas/2025.01/2025.04.10/db/name.txt')
        .then(response => response.text())
        .then(data => console.log(data))
}




const asyncFunctions = {
    fetchData
}

export default asyncFunctions;