//* access key
const accessKey = "NwiXa-y4WJ68_qqlkTWqCrcQDK9zPPU02p-oIKOwRSA";

//* declare variables
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");

//* image API
let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`; //* api url
    //* per_page will display 12 images

    const response = await fetch(url);
    const data = await response.json();

    //* check page numbers
    if(page === 1){
        searchResult.innerHTML = ""; //* clear previous images
    }

    //* read data
    const results = data.results;
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a"); //* redirect to unsplash more images
        imageLink.href = result.links.html;
        imageLink.target = "_blank"; //* open link in new tab

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink); //* a tag will be displayed here!
    });

    //* show more images
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); //* prevent form submission
    page = 1;
    searchImages();
});

//* click event on show more images
showMoreBtn.addEventListener("click", () => {
    page++; //* increment images
    searchImages();
});