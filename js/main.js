//show menu for mobile
const headerBtn = document.querySelector('.header__burger');
const headerInfo = document.querySelector('.header__info');
const headerList = document.querySelector('.header__list');
const overlay = document.querySelector('.overlay-mobile');

const showMenu = () => {
	headerList.classList.add('--show');
	overlay.classList.add('--show');
	headerBtn.classList.add('--close');
};
headerBtn.addEventListener('click', showMenu);

//show menu user in mobile
const userInfo = document.querySelector('.acc-info-btn');
const userInfoMenuMobi = document.querySelector('.status-mobile');
const showInfo = () => {
	userInfoMenuMobi.classList.add('open');
	if (document.body.offsetWidth < 992) {
		overlay.classList.add('--show');
	}
};
userInfo.addEventListener('click', showInfo);

//overlay for menu user
const showOverlay = () => {
	overlay.classList.remove('--show');
	headerList.classList.remove('--show');
	headerBtn.classList.remove('--close');
	userInfoMenuMobi.classList.remove('open');
};
overlay.addEventListener('click', showOverlay);

//fixed menu
const nav = document.querySelector('.header');

function fixedMenu() {
	if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
		nav.classList.add('--scroll');
	} else {
		nav.classList.remove('--scroll');
	}
}
window.addEventListener('scroll', fixedMenu);

//scroll button
const scrollButton = document.querySelector('#scroll-to-top');

const scrollToTop = () => {
	const t = document.documentElement.scrollTop || document.body.scrollTop;
	if (t >= 10) {
		window.scrollTo(0, t - t);
	}
};
scrollButton.addEventListener('click', scrollToTop);

//search tab
const tabs = document.querySelectorAll('.banner__title p');
const formControls = document.querySelectorAll('.form-control');

function showFormControl() {
	tabs.forEach((x) => x.classList.remove('--choice'));
	formControls.forEach((x) => x.classList.remove('--show'));

	formControls[this.dataset.idForm].classList.add('--show');
	this.classList.add('--choice');
}

tabs.forEach((x) => x.addEventListener('click', showFormControl));

//procedure
const procedureBox = document.querySelectorAll('.procedure__box');
const contentProcedure = document.querySelectorAll(
	'.procedure__content-list .content'
);

function hiddenAllProcedure() {
	contentProcedure.forEach((x) => x.classList.remove('--show'));
	procedureBox.forEach((x) => {
		x.classList.remove('active');
		x.children[1].classList.remove('--show');
		x.children[0].classList.add('--show');
	});
}

function showProcedure() {
	hiddenAllProcedure();
	contentProcedure[this.dataset.idProcedure].classList.add('--show');
	this.children[0].classList.remove('--show');
	this.children[1].classList.add('--show');
	this.classList.add('active');
}

procedureBox.forEach((x) => x.addEventListener('click', showProcedure));
//procedure - end

//wow.js
new WOW().init();

//couter find
jQuery(document).ready(function ($) {
	$('.count').counterUp({
		delay: 5,
		time: 2000,
	});
});

//side services
const servicesListTabs = document.querySelectorAll('.services__list li');

var galleryThumbs = new Swiper('.services__tabs', {
	// spaceBetween: 0,
	slidesPerView: 6,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	direction: 'vertical',
});
galleryThumbs.mousewheel.disable();

var mySwiper = new Swiper('.services__right', {
	slidesPerView: 1,
	spaceBetween: 70,
	loop: true,
	autoplay: 3000,
	autoplayDisableOnInteraction: false,
	// Optional parameters
	direction: 'horizontal',
	fadeEffect: {
		crossFade: true,
	},
	thumbs: {
		swiper: galleryThumbs,
	},
	on: {
		slideChange: function () {
			servicesListTabs.forEach((x) => x.classList.remove('active'));
			servicesListTabs[this.realIndex].classList.add('active');
		},
	},
});
