const menu = document.getElementsByClassName("menu")[0];
const navbar = document.getElementsByClassName("navbar-list")[0];
const closeButton = document.getElementsByClassName("bi-x")[0];

menu.addEventListener("click", () => {
  navbar.classList.add("navbar--open");
  document.body.style.overflow = "hidden";
  closeButton.classList.add("x--open");
});
