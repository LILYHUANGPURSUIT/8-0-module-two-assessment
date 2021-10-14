/* <body>
    <header>
        <h1>Ghibli Review App</h1>
        <img alt="ghibli-logo" src="./images/ghibli-logo.png" />
    </header>
        <section id="display-info">
            <select id="movie-title-selector" name="movie-title-selector">
                <option></option>
            </select>
            <div id="search-info-details">
                <h3 id="selected-title">Input Title</h3>

                <p>year</p>
            
                <p>description</p>
            </div>
        </section>
    <form id="reviewed-input"> 
        <div id="submit-review-box">Your Review
            <input type="text" id="reviewed-film" name="reviewed-film" />
            <button type="submit">Submit Review</button>
        </div>
        <div>
            <ul id="titles-list">
                <li>no.1</li>
                <li>no.2</li>
            </ul>
        </div>
    </form>
</body> */


let select = document.querySelector("#display-info select");
let selectedTitle = document.querySelector("#selected-title");
let searchInfoDetails = document.querySelector("#search-info-details");
let titleSelector = document.querySelector("#movie-title-selector");
let ul = document.querySelector("#titles-list");
let submitReview = document.querySelector("#submit-rewiew")
let inputText = document.querySelector("#reviewed-film");
// let list = document.createElement("li");

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

        // submitReview.addEventListener("click", (event)=> {
        //     let list = document.createElement("li");
        //     list.textContent = "hello";
        //     let span = document.createElement("span");
        //     span.textContent = ": ";
        //     ul.append(list, span);
        // })
            
            








    })
)