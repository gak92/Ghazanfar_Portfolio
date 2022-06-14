const menu = document.getElementsByClassName('menu')[0];
const navbar = document.getElementsByClassName('navbar-list')[0];
const closeButton = document.getElementsByClassName('bi-x')[0];
const navItems = document.getElementsByClassName('navbar-item');

menu.addEventListener('click', () => {
  navbar.classList.add('navbar--open');
  document.body.style.overflow = 'hidden';
  closeButton.classList.add('x--open');
  menu.classList.add('menu--close');
});

function closeMobileMenu() {
  navbar.classList.remove('navbar--open');
  document.body.style.overflowY = 'scroll';
  closeButton.classList.remove('x--open');
  menu.classList.remove('menu--close');
}

closeButton.addEventListener('click', closeMobileMenu);

console.log(navItems);
Array.from(navItems).forEach((navitem) => {
  // console.log(navitem);
  navitem.addEventListener('click', closeMobileMenu);
});
