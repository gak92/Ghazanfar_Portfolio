const menu = document.getElementsByClassName('menu')[0];
const navbar = document.getElementsByClassName('navbar-list')[0];
const closeButton = document.getElementsByClassName('bi-x')[0];
const navItems = document.getElementsByClassName('navbar-item');
const headline = document.getElementsByClassName('headline')[0];
const logo = document.getElementsByClassName('logo')[0];

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

const seeBtn = document.querySelectorAll('.see_project');
const wrapper = document.getElementsByClassName('wrapper')[0];
const closeproject = document.getElementById('close-project');

// Data to put on pop up cards
const mycards = [
  {
    desktop_img: './images/desktop/Portoflio_Card/nature.png',
    mobile_img: './images/work/Tonic.png',
    project_title: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1510s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essent`,
    tags: ['HTML', 'CSS', 'Javascript'],
  },
  {
    desktop_img: './images/desktop/Portoflio_Card/art.png',
    mobile_img: './images/work/multipost.png',
    project_title: 'Multi-post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1510s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essent`,
    tags: ['HTML', 'CSS', 'Javascript'],
  },
  {
    desktop_img: './images/desktop/Portoflio_Card/facebook.png',
    mobile_img: './images/work/Tonic.png',
    project_title: 'Tonic2',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1510s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essent`,
    tags: ['HTML', 'CSS', 'Javascript'],
  },
  {
    desktop_img: './images/desktop/Portoflio_Card/uber.png',
    mobile_img: './images/work/Tonic.png',
    project_title: 'Multi-post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1510s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essent`,
    tags: ['HTML', 'CSS', 'Javascript'],
  },
];

// Function to put data dynamically on the popup card
function openCard(id) {
  id -= 1;
  const card = mycards[id];

  const cardTitle = document.getElementById('card-title');
  cardTitle.innerHTML = card.project_title;

  const cardClient = document.getElementById('card-client');
  cardClient.innerHTML = card.client;

  const cardRole = document.getElementById('card-role');
  cardRole.innerHTML = card.role;

  const cardYear = document.getElementById('card-year');
  cardYear.innerHTML = card.year;

  const cardDescription = document.getElementById('card-description');
  cardDescription.innerHTML = card.description;

  const cardTags = document.querySelectorAll('#card-tags li');
  for (let i = 0; i < cardTags.length; i += 1) {
    cardTags[i].innerHTML = card.tags[i];
  }

  const mobileImage = document.getElementById('mobile-image');
  const desktopImage = document.getElementById('desktop-image');
  mobileImage.src = card.mobile_img;
  desktopImage.src = card.desktop_img;

  stopScroll();
  wrapper.classList.add('wrapper--open');
}

// Open Project Pop up Window
seeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    openCard(btn.dataset.cardid);
  });
});

// Close Project Pop up Window
closeproject.addEventListener('click', () => {
  enableScroll();
  wrapper.classList.remove('wrapper--open');
});
