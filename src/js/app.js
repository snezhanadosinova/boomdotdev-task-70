import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let avatarImage = document.querySelector(".image");
  avatarImage.addEventListener("click", () => {
    avatarImage.style.transform = "scale(2)";
  });
});
