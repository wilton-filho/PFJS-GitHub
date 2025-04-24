const getCats = async (total) => { 

    try {
        // para ver todas as opções de breed_ids basta acessar esse endpoint: https://api.thecatapi.com/v1/breeds
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${total}&breed_ids=beng,abys,aeg,abob,acur,asho&api_key=live_DCe0pvmVTkMF2PzG65AppyvtUasslK78wkHjDSYxVcS5ctA5oi6i3Axml2uoNgGM`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching cat image:", error);
        return [];
    }
}

export default getCats;