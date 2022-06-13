const menu = document.getElementsByClassName("menu")[0];
const navbar = document.getElementsByClassName("navbar-list")[0]

menu.addEventListener("click", () => {
  navbar.classList.add("navbar--open");
  document.body.style.overflow = "hidden"
});
