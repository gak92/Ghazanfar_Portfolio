  const menu = document.getElementsByClassName('menu')[0];
  const navbar = document.getElementsByClassName('navbar-list')[0];
  const closeButton = document.getElementsByClassName('bi-x')[0];
  const navItems = document.getElementsByClassName('navbar-item');
  const headline = document.getElementsByClassName('headline')[0];
  const logo = document.getElementsByClassName('logo')[0];

function blur(number) {
  headline.style.filter = `blur(${number}px)`;
  logo.style.filter = `blur(${number}px)`;
}

function closeMobileMenu() {
  navbar.classList.remove('navbar--open');
  document.body.style.overflowY = 'scroll';
  closeButton.classList.remove('x--open');
  menu.classList.remove('menu--close');
  blur(0);
}

if (typeof window !== 'undefined') {
  menu.addEventListener('click', () => {
    navbar.classList.add('navbar--open');
    document.body.style.overflow = 'hidden';
    closeButton.classList.add('x--open');
    menu.classList.add('menu--close');
    blur(6);
  });

  closeButton.addEventListener('click', closeMobileMenu);

  Array.from(navItems).forEach((navitem) => {
    navitem.addEventListener('click', closeMobileMenu);
  });
}
