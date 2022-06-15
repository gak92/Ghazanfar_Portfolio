const menu = document.getElementsByClassName('menu')[0];
const navbar = document.getElementsByClassName('navbar-list')[0];
const closeButton = document.getElementsByClassName('bi-x')[0];
const navItems = document.getElementsByClassName('navbar-item');
const headline = document.getElementsByClassName('headline')[0];
const logo = document.getElementsByClassName('logo')[0];
const seeBtn = document.getElementsByClassName('see_project')[0];
const wrapper = document.getElementsByClassName('wrapper')[0];
const closeproject = document.getElementById('close-project');

// Function to blur the background
function blur(headline, logo, number) {
  headline.style.filter = `blur(${number}px)`;
  logo.style.filter = `blur(${number}px)`;
}

function stopScroll() {
  document.body.style.overflowY = 'hidden';
}

function enableScroll() {
  document.body.style.overflowY = 'auto';
}

// Open Menu
menu.addEventListener('click', () => {
  navbar.classList.add('navbar--open');
  document.body.style.overflow = 'hidden';
  closeButton.classList.add('x--open');
  menu.classList.add('menu--close');
  blur(headline, logo, 6);
});

// Function to close the Menu
function closeMenu() {
  navbar.classList.remove('navbar--open');
  document.body.style.overflowY = 'scroll';
  closeButton.classList.remove('x--open');
  menu.classList.remove('menu--close');
  blur(headline, logo, 0);
}

// Close Menu when click on Close Button
closeButton.addEventListener('click', () => {
  closeMenu();
});


// Close Menu when click on Menu option
Array.from(navItems).forEach((navitem) => {
  navitem.addEventListener('click', () => {
    closeMenu();
  });
});

// Open Project Pop up Window
seeBtn.addEventListener('click', () => {
  stopScroll();
  wrapper.classList.add('wrapper--open');
});

// Close Project Pop up Window
closeproject.addEventListener('click', () => {
  enableScroll();
  wrapper.classList.remove('wrapper--open');
});
