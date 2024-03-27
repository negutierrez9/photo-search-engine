const searchBar = document.querySelector("form"); 
const searchResults = document.querySelector(".searchResults"); 
const password = document.querySelector("#api-key");

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
}

async function fetchAPI() {
    const apiKey = password.value; 

    const baseURL =  `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=${apiKey}
    `

    const response = await fetch(baseURL, options); 
    const data = await response.json(); 
    addImageToDOM(data.results); 
}

searchBar.addEventListener("submit", (e) => {
    e.preventDefault(); 
    searchQuery = e.target.querySelector('input').value; 
    fetchAPI(); 
});

function addImageToDOM(results) {
    searchResults.innerHTML = ''; 
    results.forEach(element => {
        const item = document.createElement('div');
        item.className = 'item'; 

        const image = document.createElement('img'); 
        image.src = element.urls.small; 

        item.appendChild(image); 

        searchResults.appendChild(item); 
    });    
}
