  function api() {
    const apikey = "0cb9d57e369508bb1b1328c84535ccd4";
    const url = "https://gnews.io/api/v4/search?q=nanotecnologia&lang=pt&apikey=" + apikey;
  
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const articles = data.articles;
  
        if (articles && articles.length > 0) {
          for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
  
            const articleDiv = document.createElement("div");
            articleDiv.className = "square";
            
            const imageElement = document.createElement("img");
            imageElement.src = article.image;
            imageElement.addEventListener("click", function() {
                window.open(article.url, "_blank");
            });
  
            const titleElement = document.createElement("h3");
            titleElement.textContent = article.title;
  
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = article.description;
  
            articleDiv.appendChild(imageElement);
            articleDiv.appendChild(titleElement);
            articleDiv.appendChild(descriptionElement);
            document.getElementById("noticias-container").appendChild(articleDiv);
          }
        } else {
          document.getElementById("noticias-container").textContent = "Nenhum artigo encontrado.";
        }
      })
      .catch(function (error) {
        console.error("Erro na solicitação: " + error);
      });
}

api();