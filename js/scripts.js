'use strict';

// show the mobile menu
const mobileMenuButton = document.querySelector('.mobile-menu__button'),
	  mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
	mobileMenu.classList.toggle('show');
});
// ---------------------------------------------------------------------------

// show footer info
const inner_title = document.querySelectorAll('.view'),
	  inner_links = document.querySelectorAll('.footer__inner-links');

for (let i = 0; i < inner_title.length; i ++) {
	inner_title[i].addEventListener('click', () => {
		inner_links[i].classList.toggle('showMe');
	});
}