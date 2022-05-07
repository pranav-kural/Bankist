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
