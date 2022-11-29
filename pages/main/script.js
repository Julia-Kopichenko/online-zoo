// alert("Please, give me a few days to finish my work :) ");

const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  hamburger.classList.toggle("open");
}
hamburger.addEventListener("click", toggleMenu);
