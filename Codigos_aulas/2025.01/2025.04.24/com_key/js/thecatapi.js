const getCats = async (total) => {
    try {

        // Troque a minha API_KEY abaixo pela sua para fazer os testes
        const API_KEY = 'live_DCe0pvmVTkMF2PzG65AppyvtUasslK78wkHjDSYxVcS5ctA5oi6i3Axml2uoNgGM';

        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${total}&breed_ids=beng&api_key=${API_KEY}`);
        const data = await response.json();
        return data; // vetor contendo os gatos
    }
    catch(error) {
        console.log(error);
        return []; // vetor vazio: erro (nenhum gato)
    }
}

export default getCats;