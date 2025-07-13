document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 2.5s ease-in";
    document.body.style.opacity = 1;
  }, 500);
});
