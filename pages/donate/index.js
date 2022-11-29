function limitKeypress(event, value, maxLength) {
  if (value != undefined && value.length >= maxLength) {
    event.preventDefault();
  }
}

const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  hamburger.classList.toggle("open");
}
hamburger.addEventListener("click", toggleMenu);
