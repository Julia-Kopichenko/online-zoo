const INPUT_RANGE = document.querySelector("#points");
const CARDS_CONTAINER = document.querySelector(".testimonials-cards-container");
const CARD = document.querySelector(".testimonials-card");

INPUT_RANGE.addEventListener("input", rangeValue);

function rangeValue() {
  let rangeValue = Number(INPUT_RANGE.value);
  let widthCard = window.getComputedStyle(CARD).width;
  let gap = window.getComputedStyle(CARDS_CONTAINER).gap;

  widthCard = Number.parseInt(widthCard, 10);
  gap = Number.parseInt(gap, 10);

  let offset = widthCard + gap;

  CARDS_CONTAINER.setAttribute("style", `transform: translate(-${rangeValue * offset}px);`);
}
