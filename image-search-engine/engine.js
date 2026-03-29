const accessKey="WH3F3pp37_cQCJ0iCCh7CZPhmcI8J3luLIWXT_1-UMY";
const searchFrom=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const searchSowMoreBtn=document.getElementById("show-more-btn");


let keyword= "";
let page=1;
async function searchImage(){
    keyword= searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response= await fetch(url);
    const data= await response.json();
    const results=data.results;
    results.map((results)=>{
        const image=document.createElement("img");
        image.src= results.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href=results.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);


    });

};

searchFrom.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    searchImage();
});