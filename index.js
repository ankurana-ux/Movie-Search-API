let movieInp = document.getElementById("movie-inp")
let searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", function(){
    //console.log("clicked")
    let movieName = movieInp.value
    let apiKey = "2c4e308a"
    let finalUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`
    console.log(finalUrl)

    fetch(finalUrl).then((response) => response.json()).then((data) => {

        let movieContainer = `<div id="container">`;

        for(let i = 0; i < data.Search.length; i++ ){
            console.log(i)
            movieContainer += `<div id="wrapper"> 
                                <img src="${data.Search[i].Poster}" alt="${data.Search[i].Title} Poster" width="200"> 
                                <p> Movie list:- <br> ${data.Search[i].Title} </p>
                                <p> Movie type:- <br> ${data.Search[i].Type} </p>
                                <p> Movie Year:- <br> ${data.Search[i].Year} </p>
                                <p> Movie imdb:- <br> ${data.Search[i].imdbID} </p>
                            </div>`
        }
        movieContainer += `</div>`;
        result.innerHTML = movieContainer;

        console.log(data)

    }).catch(() =>  {
            if(movieName.length == 0) {
                result.innerHTML = `<h1> Input Fields cannot be empty </h1>`
            } else {
                result.innerHTML = `<h1> Please enter a correct name </h1>`
            }
        })
    

})
