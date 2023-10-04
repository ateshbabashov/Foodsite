// Responsiv Hambureger
let hamburger= document.querySelector("#hamburger");
let navbar = document.querySelector("#nav-bar");

hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle("hamburger-classlist");
});
