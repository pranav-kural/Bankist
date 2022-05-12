'use strict';

///////////////////////////////////////
// Selecting common document elements
const header = document.querySelector('.header');

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault(); // prevent page from scrolling up on clicking the button
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Cookie Message

// add cookie message
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `
  We use cookies for improved functionality and analytics. 
  <button class="btn btn--close-cookie">Got it!</button>`;
header.append(message);

// delete cookie message
document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove());

// styling
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// getting declared (not inline) styles of an element
// getComputedStyle(message).color;

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// changing css properties at root / document level (ex: implementing dark mode)
// document.documentElement.style.setProperty('--color-primary', 'orangered');

///////////////////////////////////////
// Smooth scroll to section 1

document.querySelector('.btn--scroll-to').addEventListener('click', 
    () => document.querySelector('#section--1').scrollIntoView({behavior: 'smooth'}));

// NOTE: for older browsers which don't support Element.scrollIntoView()
//
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// btnScrollTo.addEventListener('click', (e) => {
//   // get coordinates of section 1 relative to the viewport
//   const s1coords = section1.getBoundingClientRect();
//   // scroll to section1
//   window.scrollTo({
//     left: s1coords.left + window.pageXOffset,
//     top: s1coords.top + window.pageYOffset,
//     // behavior: 'smooth',
//   });
// });

///////////////////////////////////////
// Modal window

/**
 * Using Event propagation (specifically the bubbling phase) to implement event deligation
 * Instead of attaching same event handling function to each child element, we simple implement
 * the logic in a single event handling function which is attached to the parent
 * 
 * 1. Add event listener to common parent element
 * 2. Determine what element originated the event
 * 3. Matching strategy to identy element of interest
 * 4. Based on logic, execute appropriate code
 */

document.querySelector('.nav__links').addEventListener('click', (e) => {
  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    e.preventDefault();
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
  }
});

// Older way; adding event handling function to each element

// document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(el.getAttribute('href'));
//     document.querySelector(el.getAttribute('href')).scrollIntoView({behavior: 'smooth'})
//   });
// });

///////////////////////////////////////
// Tabbed Components
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', e => {
  // select the clicked element
  const clicked = e.target;
  // check for and select the button element
  const tabClicked = clicked.closest('.operations__tab');
  // Gaurd clause (if null, return execution)
  if (!clicked) return;
  // if button is clicked
  if (clicked && tabClicked) {
    // remove active from all
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    // add active to currently clicked button
    tabClicked.classList.add('operations__tab--active');
    // hide all tab contents
    tabsContent.forEach(tabContent => tabContent.classList.remove('operations__content--active'));
    // display the active tab content
    document.querySelector(`.operations__content--${tabClicked.dataset.tab}`).classList.add('operations__content--active');
  }
});