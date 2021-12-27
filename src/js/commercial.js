export const renderCinemaCommercial = () => {
  console.log("cinema commercial loaded");
  const eventContainer = document.querySelector(".cinemaEvent");
  for (let i = 1; i <= 3; i++) {
    const cinemaEvents = createElement("div", "cEvents");
    const eventImg = createElement("img", "cImg");
    eventImg.src = `src/img/cinema${i}.jpg`;
    cinemaEvents.appendChild(eventImg);
    eventContainer.appendChild(cinemaEvents);
  }
};

function createElement(type, name) {
  const element = document.createElement(type);
  element.setAttribute("class", name);
  return element;
}
