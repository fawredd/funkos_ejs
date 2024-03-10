//  Haburger menu

const navbarIcon = document.querySelector(".navbar__icon");
const navbarMenu = document.querySelector(".navbar__menu");

navbarIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

// Hide hamburger menu on scroll

document.addEventListener("scroll", () => {
  navbarMenu.classList.remove("show-menu");
});
