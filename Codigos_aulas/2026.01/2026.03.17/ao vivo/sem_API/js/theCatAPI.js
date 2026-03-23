const getCats = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";

    try {
        const resposta = await fetch(url);
        const gatos = await resposta.json();
        return gatos;
    }
    catch (error) {
        console.log(error.message);
        return [];
    }
}

export default getCats;