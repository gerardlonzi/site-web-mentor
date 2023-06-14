const desktop = document.querySelector("#desktop");
const see_all = document.querySelector(".see-all")
see_all.addEventListener("click",()=>{
    desktop.style.display = "block"
})
const menu = document.querySelector( ".menu");
const menu_id = document.getElementById("menu")

const mean = document.querySelector(".fa-navicon");
const closen = document.querySelector(".fa-times");

closen.addEventListener("click",()=>{
    menu_id.classList.toggle("close")

})
mean.addEventListener("click",()=>{
    menu.classList.toggle("open")

})
