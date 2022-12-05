const CAROUSEL = document.querySelector("#carousel");
const BUTTON_LEFT = document.querySelector("#button-left");
const BUTTON_RIGHT = document.querySelector("#button-right");
const ITEM_LEFT = document.querySelector("#left-items");
const ITEM_CURRENT = document.querySelector("#active-items");
const ITEM_RIGHT = document.querySelector("#right-items");

// clone active-items list:
function getLiFrom(ul) {
  let ulClone = ul.cloneNode(true);
  const list = ulClone.querySelectorAll("li");
  return [...list];
}
// sort items
function shuffle(array) {
  return array.slice().sort(() => Math.random() - 0.5);
}
// Add random cards to left and right sides
function addRandomCardsTo(ul) {
  let cardsArray = getLiFrom(ITEM_CURRENT);
  let sortedCardsArray = shuffle(cardsArray);
  sortedCardsArray.map((item) => {
    ul.append(item);
  });
}

addRandomCardsTo(ITEM_LEFT);
addRandomCardsTo(ITEM_RIGHT);

const moveLeft = () => {
  CAROUSEL.classList.add("transition-left");
  BUTTON_LEFT.removeEventListener("click", moveLeft);
  BUTTON_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add("transition-right");
  BUTTON_LEFT.removeEventListener("click", moveLeft);
  BUTTON_RIGHT.removeEventListener("click", moveRight);
};

BUTTON_LEFT.addEventListener("click", moveLeft);
BUTTON_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;

  if (animationEvent.animationName === "move-left") {
    changedItem = ITEM_LEFT;

    CAROUSEL.classList.remove("transition-left");
  } else {
    changedItem = ITEM_RIGHT;

    CAROUSEL.classList.remove("transition-right");
  }
  document.querySelector("#active-items").innerHTML = changedItem.innerHTML;

  changedItem.innerHTML = "";
  addRandomCardsTo(changedItem);

  BUTTON_LEFT.addEventListener("click", moveLeft);
  BUTTON_RIGHT.addEventListener("click", moveRight);
});
