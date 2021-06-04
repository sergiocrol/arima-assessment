'use strict';

const menuButton = document.querySelector('.menu-button');
const menuIconOpened = document.querySelector('.menu-icon-open');
const menuIconClosed = document.querySelector('.menu-icon-close');
const menu = document.querySelector('.main-nav');
const menuLinks = document.querySelectorAll(".main-nav ul li");

menuButton.addEventListener('click', toggleMenu);
menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

function toggleMenu() {
  const isNavOpened = menu.classList.contains('show-nav');

  isNavOpened ? menu.classList.remove('show-nav') : menu.classList.add('show-nav');
  menuIconClosed.style.display = isNavOpened ? 'none' : 'block';
  menuIconOpened.style.display = isNavOpened ? 'block' : 'none';
}