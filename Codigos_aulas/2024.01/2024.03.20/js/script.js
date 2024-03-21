window.addEventListener("load", () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODVmMmMwYzJiMjkxZTM3ZTQxYzY1YTZjZTBlYmQ3NCIsInN1YiI6IjY0MTIyNWQ3ZWRlMWIwMjhhMmI4NWVkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VKHFk792x8CFl9Cdx6xDwYP4Ia5Dt5GiJxENktQHGhQ'
        }
      };
      
      var language = "pt-br";

      fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}&page=1`, options)
        .then(response => response.json())
        .then(filmes => exibirTitulos(filmes.results))
        .catch(err => console.error(err));

})

function exibirTitulos(filmes) {
    filmes.forEach(filme => {
        var boxFilme = document.createElement("div");

        // Criando o parágrafo
        var tituloFilme = document.createElement("p");
        tituloFilme.textContent = filme.title;

        // Criando a imagem 
        var capaFilme = document.createElement("img");
        var url = "https://image.tmdb.org/t/p/w500";
        // capaFilme.setAttribute("src",`${url}${filme.backdrop_path}`);
        capaFilme.setAttribute("src",`${url}${filme.poster_path}`);

        boxFilme.appendChild(tituloFilme);
        boxFilme.appendChild(capaFilme);
        document.getElementById("boxFilmes").appendChild(boxFilme);
    })
}