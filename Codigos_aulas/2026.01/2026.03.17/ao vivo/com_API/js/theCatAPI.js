const getCats = async () => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng,abys,siam,pers,sphy&api_key=live_P3NNFeFPlSygQoSQUTmcbmNvRI5MKs2Uz1Ati4seHJIEc3cH0UsGNka1lobrBjbC"
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