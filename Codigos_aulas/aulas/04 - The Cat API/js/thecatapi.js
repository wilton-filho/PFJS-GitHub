const getCats = async (total) => { 

    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${total}`);
        const data = await response.json();
        return data.map((cat) => cat.url);
    }
    catch (error) {
        console.error("Error fetching cat image:", error);
        return [];
    }
}

export default getCats;