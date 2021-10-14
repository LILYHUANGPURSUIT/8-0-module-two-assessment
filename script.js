let select = document.querySelector("#movie-title-selector");
let selectedTitle = document.querySelector("#selected-title");
let searchInfoDetails = document.querySelector("#search-info-details");
let titleSelector = document.querySelector("#movie-title-selector");
let ul = document.querySelector("#titles-list");
let reviewedInput = document.querySelector("#reviewed-input")
let inputText = document.querySelector("#reviewed-film");


fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => res.json()
    .then((data) =>{
        

        for(let film of data) {
            let option = document.createElement("option");
            option.textContent = film.title;
            option.value = film.title;
            select.append(option);
            

            titleSelector.addEventListener("change", (e)=> {
                e.preventDefault();

                if(film.title === e.target.value) {
                    searchInfoDetails.innerHTML = `
                    <h3>${film.title}</h3>

                    <p>${film.release_date}</p> 
                
                    <p>${film.description}</p>
                `
                }
            })
            

        }

        reviewedInput.addEventListener("submit", (event)=> {
            event.preventDefault();
            console.log(event.target)
            let yourReviewFilm = select.value;
            let list = document.createElement("li");
            ul.append(list);
            list.innerHTML = `
                <div><strong>${yourReviewFilm}</strong> </div>
            `
        })
            
            








    })
)