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
upButton.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
