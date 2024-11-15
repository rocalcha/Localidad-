const name = 'world';
console.log(`Hello ${name}`);

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () =>{
navLinks.classList.toggle("active");
})