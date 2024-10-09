window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled-navbar");
  } else {
    navbar.classList.remove("scrolled-navbar");
  }
});
