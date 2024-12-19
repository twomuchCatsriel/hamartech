const left = document.getElementById("left");
const right = document.getElementById("right");

const sectors = [
    document.getElementById("sectComp"), // 0
    document.getElementById("sectLearn"), // 1;
    document.getElementById("sectTech"), //2;
];

let currentPage = 0
const totalPages = sectors.length;

left.onclick = function(){
    sectors[currentPage].style.display = "none";

    if(currentPage === 0){
        currentPage = sectors.length - 1;
    } 
    else{
        currentPage -= 1;
    }

    sectors[currentPage].style.display = "inline";
}

right.onclick = function(){
    sectors[currentPage].style.display = "none";

    if(currentPage === sectors.length - 1){
        currentPage = 0;
    } 
    else{
        currentPage += 1;
    }

    sectors[currentPage].style.display = "inline";
}