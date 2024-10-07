
const progressCircle = document.querySelector(".autoplay-progress");
let headerSwiper = new Swiper(".header__swiper", {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".header__swiper-pagination",
    type: "fraction",
  },
});

let carsSwiper = new Swiper(".cars__swiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    577: {
      slidesPerView: 2,
    }
  },
});

const video = document.getElementById('video');

function cursor(e) {
  if (e.paused) {
    e.play();
    document.body.style.cursor = 'url(../images/icon-pause.svg), auto';  // Если видео на паузе, запускаем его
  } else {
    e.pause(); // Если видео воспроизводится, ставим на паузу
    document.body.style.cursor = 'url(../images/icon-play.svg), auto';
  }
}

video.addEventListener('mouseenter', () => {
  if (video.paused) {
    document.body.style.cursor = 'url(../images/icon-play.svg), auto';
  }
});

video.addEventListener('mouseleave', () => {
  document.body.style.cursor = 'default'
})

video.addEventListener('click', function () { cursor(video) });

const photosSwiper = new Swiper(".photos__swiper", {
  effect: 'fade',
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".photos__swiper-pagination",
    type: "fraction",
  },
});