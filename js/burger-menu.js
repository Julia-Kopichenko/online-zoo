const header = document.querySelector(".header");
const menuHeaderLinks = header.querySelectorAll(".menu__link");
const iconHamburger = document.querySelector(".hamburger");

if (iconHamburger) {
  iconHamburger.addEventListener("click", toggleMenuHumburger);
}

function toggleMenuHumburger() {
  document.body.classList.toggle("lock");
  overlay.classList.toggle("active");
  header.classList.toggle("open-burger");
  iconHamburger.classList.toggle("open-burger");
}
