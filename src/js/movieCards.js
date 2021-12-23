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

  const openVideo = () => {
    const videoModal = document.createElement("div");
    videoModal.setAttribute("class", "videoModal");
    const modalBtn = document.createElement("span");
    modalBtn.setAttribute("class", "far fa-times-circle");
    modalBtn.addEventListener("click", (e) => {
      e.currentTarget.parentNode.remove();
    });

    const video = document.createElement("iframe");
    video.setAttribute("class", "video-trailer");
    video.setAttribute("target", "_parent");
    video.src = `${data.trailer}`;
    videoModal.append(video);
    videoModal.append(modalBtn);
    card.append(videoModal);
  };

  const trailer = document.createElement("a");
  trailer.setAttribute("id", "trailer");
  trailer.setAttribute("class", "fas fa-play-circle");
  trailer.addEventListener("click", () => {
    openVideo();
  });
  visuals.append(trailer);

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
