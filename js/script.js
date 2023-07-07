new Swiper('.banner-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

new Swiper('.certificate-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});

const upButton = document.getElementsByClassName('up')[0];
upButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

const menu = document.getElementsByClassName('menu')[0];
const menuButton = document.getElementsByClassName('hamburger')[0];
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('active');
  menu.classList.toggle('active');
});

const searchActiveButton = document.getElementsByClassName('black-search')[0];
const search = document.getElementsByClassName('search')[0];
searchActiveButton.addEventListener('click', () => {
  search.classList.toggle('active');
});
