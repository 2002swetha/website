let button = document.querySelector(".arrow"),
links = document.querySelector(".nav-links");

button.addEventListener("click",()=>{
    links.classList.toggle("display");
    button.children[0].classList.toggle("toggle1");
    button.children[1].classList.toggle("toggle2");
    button.children[2].classList.toggle("toggle3");
})
