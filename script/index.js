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

// Data to put on pop up cards
const mycards = [
  {
    cardid: 1,
    desktop_img: './images/desktop/Portoflio_Card/01_Coding_Expo.png',
    mobile_img: './images/mobile/01_Coding_Expo.png',
    project_title: 'Coding Expo',
    client: 'Expo',
    role: 'Front End Dev',
    year: '2019',
    short_desc: 'A web application for the exhibition for the coding experts; no accounts or sign-ups required.',
    description: 'A web application for the exhibition for the coding experts; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    demo_link: 'https://gak92.github.io/Module01_Capstone_Project/',
    code_link: 'https://github.com/gak92/Module01_Capstone_Project',
  },
  {
    cardid: 2,
    desktop_img: './images/desktop/Portoflio_Card/06_space_travellers_hub.png',
    mobile_img: './images/mobile/06_space_travellers_hub.png',
    project_title: 'Space Travellers Hub',
    client: 'Space',
    role: 'Front End Dev',
    year: '2020',
    short_desc: 'A web application for a company that provides commercial and scientific space travel services..',
    description: `A web application for a company that provides commercial and scientific space travel services. 
    The application will allow users to book rockets and join selected space missions.`,
    tags: ['React', 'Redux', 'ES6', 'API'],
    demo_link: 'https://hub-space-travelers.netlify.app/',
    code_link: 'https://github.com/gak92/space-travel-hub',
  },
  {
    cardid: 3,
    desktop_img: './images/desktop/Portoflio_Card/05_financial_stock_companies.png',
    mobile_img: './images/mobile/05_financial_stock_companies.png',
    project_title: 'Metrics webapp',
    client: 'React',
    role: 'Front End Dev',
    year: '2020',
    short_desc: 'A web application to get information about the companies listed in stock exchange by fetching data from API.',
    description: `A web application to get information about the companies listed in stock exchange. 
    It is build with React/Redux and fetch data using API.`,
    tags: ['React', 'Redux', 'API'],
    demo_link: 'https://stock-metrics-webapp.netlify.app/',
    code_link: 'https://github.com/gak92/metrics-wepapp/',
  },
  {
    cardid: 4,
    desktop_img: './images/desktop/Portoflio_Card/04_Home_Budget_App.png',
    mobile_img: './images/mobile/04_Home_Budget_App.png',
    project_title: 'Home Budget App',
    client: 'Microverse',
    role: 'Back End Dev',
    year: '2021',
    short_desc: 'A daily transaction budget app of to keep track of personalized expenses.',
    description: `A mobile web application where you can manage your budget: you have a list of 
    transactions associated with a category, so that you can see how much money you spent and on what.`,
    tags: ['Ruby', 'Rails', 'Postgres'],
    demo_link: 'https://ror-home-budget-app.herokuapp.com/',
    code_link: 'https://github.com/gak92/ror-home-budget-app.git',
  },
];

const workSection = document.getElementById('work');

function loadCards() {
  let allCards = '';

  for (let i = 0; i < mycards.length; i += 1) {
    const card = mycards[i];

    const singleCard = `<div id="card${card.cardid}" class="card-works">
    <img
      src="${card.mobile_img}"
      alt="Tonic Image"
      class="snapshot-portfolio"
    />
    <img
      src="${card.desktop_img}"
      alt="Nature"
      class="desktop-portfolio-img"
    />

    <div class="left-block">
      <div class="title-box">
        <h2 class="project-title">${card.project_title}</h2>
        <div class="canopy">
          <div class="client">${card.client}</div>
          <div class="counter"></div>
          <div class="role">${card.role}</div>
          <div class="counter"></div>
          <div class="year">${card.year}</div>
        </div>
      </div>
      <p class="description-box">
        ${card.short_desc}
      </p>
      <div class="tag-box">
        <ul class="tags">
          <li class="tag">${card.tags[0]}</li>
          <li class="tag">${card.tags[1]}</li>
          <li class="tag">${card.tags[2]}</li>
        </ul>
      </div>
      <div class="action-box">
        <button class="btn see_project" type="button" data-cardid="${card.cardid}">
          See Project
        </button>
      </div>
    </div>
  </div>`;
    allCards += singleCard;
  }

  workSection.innerHTML = allCards;
}

loadCards();

const seeBtn = document.querySelectorAll('.see_project');
const wrapper = document.getElementsByClassName('wrapper')[0];

// Function to put data dynamically on the popup card
function openCard(id) {
  id -= 1;
  const card = mycards[id];

  const modalWrapper = `
    <div id="card1" class="card-works popup-card">
      <div class="left-block" id="top-box">
        <div class="title-box">
          <div class="project-top">
            <h2 class="project-title" id="card-title">${card.project_title}</h2>
            <i class="bi bi-x-lg" id="close-project"></i>
          </div>
          <div class="canopy">
            <div class="client" id="card-client">${card.client}</div>
            <div class="counter"></div>
            <div class="role" id="card-role">${card.role}</div>
            <div class="counter"></div>
            <div class="year" id="card-year">${card.year}</div>
          </div>
        </div>
      </div>

      <img
        src="${card.mobile_img}"
        alt="Tonic Image"
        class="snapshot-portfolio"
        id="mobile-image"
      />
      <img
        src="${card.desktop_img}"
        alt="Nature"
        class="desktop-portfolio-img"
        id="desktop-image"
      />

      <div class="left-block bottom-box">
        <p class="description-box" id="card-description">
          ${card.description}
        </p>
        <div class="righ-box">
          <div class="tag-box">
            <ul class="tags" id="card-tags">
              <li class="tag">${card.tags[0]}</li>
              <li class="tag">${card.tags[1]}</li>
              <li class="tag">${card.tags[2]}</li>
            </ul>
          </div>
          <div class="hr-line"></div>
          <div class="action-box">
            <button class="btn" type="button">
              <a href="${card.demo_link}" target="blank">See Live</a>
              <img src="./images/project/seelive.png" alt="See Live Image" class="btn-images">
            </button>
            <button class="btn" type="button">
              <a href="${card.code_link}" target="blank">See Source</a>
              <img src="./images/project/github.png" alt="Github Image" class="btn-images">
            </button>
          </div>
        </div>
      </div>
    </div>`;

  const wrapperContainer = document.getElementById('wrapper');
  wrapperContainer.innerHTML = modalWrapper;
}

openCard(1);

let closeproject = document.getElementById('close-project');

function toggleModal() {
  wrapper.classList.toggle('wrapper--open');
}

function windowOnClick(event) {
  if (event.target === wrapper) {
    enableScroll();
    // wrapper.classList.remove('wrapper--open');
    toggleModal();
  }
}

// Open Project Pop up Window
seeBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    openCard(btn.dataset.cardid);
    stopScroll();
    // wrapper.classList.add('wrapper--open');
    toggleModal();
    closeproject = document.getElementById('close-project');
  });
});

// Close Project Pop up Window
closeproject.addEventListener('click', () => {
  enableScroll();
  // wrapper.classList.remove('wrapper--open');
  toggleModal();
});

document.getElementById('wrapper').addEventListener('click', (e) => {
  if (e.target.id === 'close-project') {
    enableScroll();
    toggleModal();
  }
});

window.addEventListener('click', windowOnClick);

// Form Validation Code here
function isEmailLowerCase(email = '') {
  const lowerCaseEmail = email.toLowerCase();

  if (email === lowerCaseEmail && email.includes('@')) return true;

  return false;
}

function showErrorMessage(msg) {
  const formStatus = document.getElementById('form_status');
  formStatus.innerHTML = msg;
}

const form = document.getElementById('getintouch');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { email } = form.elements;
  const emailAddress = email.value;

  if (isEmailLowerCase(emailAddress)) {
    form.submit();
    form.reset();
    showErrorMessage('');
  } else {
    showErrorMessage('Email not valid - Should be in Lowercase');
  }
});

// Preserve input data into Local Storage
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

function saveData(dataObj) {
  const dataString = JSON.stringify(dataObj);
  localStorage.setItem('userdata', dataString);
}

function loadData(key) {
  return JSON.parse(localStorage.getItem(key));
}

function fillFormWithStoredData(storedData) {
  userName.setAttribute('value', storedData.name);
  userEmail.setAttribute('value', storedData.email);
  userMessage.innerHTML = storedData.message;
}

const storedData = loadData('userdata');

if (storedData !== null) {
  fillFormWithStoredData(storedData);
}

const data = {
  name: userName.value,
  email: userEmail.value,
  message: userMessage.value,
};

// On change Event Listener to the input field
userName.addEventListener('change', () => {
  data.name = userName.value;
  saveData(data);
});

userEmail.addEventListener('change', () => {
  data.email = userEmail.value;
  saveData(data);
});

userMessage.addEventListener('change', () => {
  data.message = userMessage.value;
  saveData(data);
});
