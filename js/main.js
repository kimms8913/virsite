document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-nav");

    if (window.scrollY > 80) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });
});