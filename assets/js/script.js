var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

    var swiper = new Swiper(".mySwiper2", {
      lazy: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

  