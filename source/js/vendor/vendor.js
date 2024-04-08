import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(function () {
  const createSwiperCoach = () => {
    const coachSwiper = document.querySelector('.coach__slider');
    if (!coachSwiper) {
      return;
    }

    const swiperForCoach = new Swiper(coachSwiper, {
      modules: [Navigation],
      navigation: {
        nextEl: '.coach__button--next',
        prevEl: '.coach__button--prev',
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: true,
      speed: 600,
      breakpoints: {
        320: {
          initialSlide: 2,
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 1,
        },
      },
    });
  };

  const createSwiperReviews = () => {
    const reviewsSwiper = document.querySelector('.reviews__slider');
    if (!reviewsSwiper) {
      return;
    }

    const swiperForReviews = new Swiper(reviewsSwiper, {
      modules: [Navigation],
      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
      spaceBetween: 60,
      slidesPerView: 1,
      grabCursor: true,
    });
  }

  createSwiperCoach();
  createSwiperReviews();
})();
