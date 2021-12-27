import { loadMovieAPI } from "./api";
import { createElement } from "./commercial";

export const availableMovies = async () => {
  const data = await loadMovieAPI();
  let date = new Date();
  let today =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let getTomorrow = date;
  getTomorrow.setDate(getTomorrow.getDate() + 1);
  let tomorrow = formatDateToString(getTomorrow);
  let availableForToday = data.filter((item) => item.date.includes(today));
  let availableForTomorrow = data.filter((item) =>
    item.date.includes(tomorrow)
  );
  sortFunc(availableForToday);
  sortFunc(availableForTomorrow);
  availableForToday.forEach((item) => {
    createLists(item, "today");
  });
  availableForTomorrow.forEach((item) => {
    createLists(item, "tomorrow");
  });
};

function formatDateToString(date) {
  let dd = (date.getDate() < 10 ? "0" : "") + date.getDate();

  let MM = (date.getMonth() + 1 < 10 ? "0" : "") + (date.getMonth() + 1);
  let year = date.getFullYear();
  return year + "-" + MM + "-" + dd;
}

const createLists = (item, className) => {
  const todayContainer = document.querySelector(`.${className}`);
  const ul = createElement("ul", "movieListUi");
  const li = createElement("li", "movieListLi");
  li.innerHTML = `${item.time}:00 <i class="fas fa-ticket-alt ticketIcon"></i> ${item.title} 99:-`;
  ul.appendChild(li);
  todayContainer.appendChild(ul);
};

const sortFunc = (item) => {
  item.sort(function (a, b) {
    return a.time - b.time;
  });
};
