const screenWidth = window.screen.width;

if (screenWidth < 1000) {
  const testimonials = document.querySelectorAll(".testimonials-card");

  if (testimonials) {
    testimonials.forEach((item) => {
      item.addEventListener("click", (event) => showPopup(event));
    });
  }
}

function getTestimonialInfo({ currentTarget }) {
  const info = {
    userPhoto: currentTarget.querySelector(".user-photo").getAttribute("src"),
    name: currentTarget.querySelector(".name").innerText,
    local: currentTarget.querySelector(".local").innerText,
    date: currentTarget.querySelector(".date").innerText,
    text: currentTarget.querySelector(".testimonials-card__text").innerText,
  };
  return info;
}
function createPopupCard(info) {
  const { userPhoto, name, local, date, text } = info;
  const card = document.createElement("div");
  card.classList.add("popup-card");

  card.innerHTML = `
  <div class="testimonials-card">
    <div class="x-icon" onClick="closePopup()"></div>
    <div class="testimonials-card__user flex">
      <img src=${userPhoto} alt="user photo" class="user-photo"></img>
      <div class="user-information">
        <p class="name">${name}</p>
        <div class="local-date">
          <span class="local">${local}</span>
          <div class="point"></div>
          <span class="date">${date}</span>
        </div>
      </div>
    </div>
    <div class="testimonials-card__text">${text}</div>
  </div>
`;
  return card;
}
function showPopup(event) {
  const parent = document.body;
  const card = createPopupCard(getTestimonialInfo(event));

  parent.append(card);

  document.body.classList.add("lock");
  overlay.classList.add("active");
  document.querySelector(".header").classList.add("not-active");
}
function closePopup() {
  let popup = document.querySelector(".popup-card");
  popup.remove();
  document.body.classList.remove("lock");
  overlay.classList.remove("active");
  document.querySelector(".header").classList.remove("not-active");
}
