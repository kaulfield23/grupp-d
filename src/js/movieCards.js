export const movieCards = (data) => {
  const container = document.querySelector(".movies");

  const card = document.createElement("div");
  card.setAttribute("class", "card");
  container.append(card);

  const visuals = document.createElement("div");
  visuals.setAttribute("class", "visuals");
  card.append(visuals);

  const thumbnail = document.createElement("img");
  thumbnail.setAttribute("class", "thumbnail");
  thumbnail.src = data.coverImg;
  visuals.append(thumbnail);

  /*   const trailer = document.createElement("a");
  trailer.setAttribute("class", "trailer");
  trailer.setAttribute("href", data.trailer);
  visuals.append(trailer); */

  const info = document.createElement("div");
  info.setAttribute("class", "info");
  card.append(info);

  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.innerText = data.title;
  info.append(title);

  const specInfo = document.createElement("p");
  specInfo.setAttribute("class", "specInfo");
  specInfo.innerText = `${data.genres} | ${data.length} | ${data.age} år`;
  info.append(specInfo);

  /*   const rating = document.createElement("span");
  rating.setAttribute("class", "rating");
  rating.innerText = data.rating;
  info.append(rating); */
};
