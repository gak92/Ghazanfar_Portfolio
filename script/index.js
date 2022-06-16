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
              <li class="tag">HTML</li>
              <li class="tag">CSS</li>
              <li class="tag">Javascript</li>
            </ul>
          </div>
          <div class="hr-line"></div>
          <div class="action-box">
            <button class="btn" type="button">
              See Live
              <img src="./images/project/seelive.png" alt="See Live Image" class="btn-images">
            </button>
            <button class="btn" type="button">
              See Source
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

// const result = isEmailLowerCase("Abc@gmail.com");
// alert(result);

const form = document.getElementById('getintouch');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = form.elements['email'];
  let emailAddress = email.value;

  if(isEmailLowerCase(emailAddress)) {
    console.log("email is valid");
  }
  else {
    console.log("not valid email");
  }

});