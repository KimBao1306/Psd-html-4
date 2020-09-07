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

//submenu for mobile
const headerListUl = headerList.querySelectorAll('li');

const openSubMenu = function () {
	headerListUl.forEach((x) => x.classList.remove('--open'));
	if (this.matches('.has-sub-menu')) {
		this.classList.add('--open');
	}
};

headerListUl.forEach((x) => {
	x.addEventListener('click', openSubMenu);
});

//fixed menu
const nav = document.querySelector('.header');

function fixedMenu() {
	if (
		(document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) &&
		document.body.offsetWidth >= 768
	) {
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
const tabs = document.querySelectorAll('input[name="search-box"]');
const formControls = document.querySelectorAll('.form-control ');

function showFormControl() {
	formControls.forEach((x) => {
		x.classList.add('--hidden');
		x.classList.remove('--show');
	});

	formControls[this.dataset.idForm].classList.remove('--hidden');
	formControls[this.dataset.idForm].classList.add('--show');
}

tabs.forEach((x) => {
	x.addEventListener('click', showFormControl);
});

//services
const servicesBox = document.querySelectorAll('.services__box');
const contentServices = document.querySelectorAll(
	'.services__content-list .content'
);

function hiddenAllServices() {
	contentServices.forEach((x) => {
		//hidden all service
		x.classList.add('--hidden');
		x.classList.remove('--show');
	});
	servicesBox.forEach((x) => {
		x.classList.remove('active');
	});
}

function showServices() {
	hiddenAllServices();

	contentServices[this.dataset.content].classList.remove('--hidden');
	contentServices[this.dataset.content].classList.add('--show');
	this.classList.add('active');
}

servicesBox.forEach((x) => {
	x.addEventListener('click', showServices);
});
//services - end

//wow.js
new WOW().init();

//couter find
// jQuery(document).ready(function ($) {
// 	$('.count').counterUp({
// 		delay: 5,
// 		time: 2000,
// 	});
// });

// function formatState(state) {
// 	// if (!state.id) {
// 	// 	return state.text;
// 	// }
// 	// var baseUrl = 'imgs/';
// 	// var $state = $(
// 	// 	'<span><img src="' +
// 	// 		baseUrl +
// 	// 		'/' +
// 	// 		state.element.value.toLowerCase() +
// 	// 		'.png" class="img-flag" /> ' +
// 	// 		state.text +
// 	// 		'</span>'
// 	// );
// 	// return $state;
// 	console.log(state);
// }

// $('#select-img').select2({
// 	templateResult: formatState,
// 	templateSelection: formatState,
// });

function formatData(data) {
	if (!data.id) {
		return data.text.toUpperCase();
	}

	const img = $(data.element).attr('data-img');

	if (!img) {
		return data.text.toUpperCase();
	} else {
		const $result = $(`<span><img src="${img}"/></span>`);

		return $result;
	}
}

$('#select-img').select2({
	templateResult: formatData,
	templateSelection: formatData,
	minimumResultsForSearch: -1,
	width: '100%',
	height: '100%',
});
