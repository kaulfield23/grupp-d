export const movieCards = (data) => {
  const container = document.querySelector(".card-ctn");
  const body = document.querySelector("body");

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
    window.addEventListener("click", (e) => {
      e.target.className.includes("videoModal") ? e.target.remove() : null;
    });

    const video = document.createElement("iframe");
    video.setAttribute("class", "video-trailer");
    video.setAttribute("target", "_parent");
    video.setAttribute("allowfullscreen", "true");
    video.src = `${data.trailer}`;
    videoModal.append(video);
    body.append(videoModal);
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
};
