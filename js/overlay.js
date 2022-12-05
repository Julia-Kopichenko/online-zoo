const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", (event) => {
  let popup = document.querySelector(".popup-card");
  if (popup) {
    closePopup();
  } else {
    toggleMenuHumburger();
  }
});
