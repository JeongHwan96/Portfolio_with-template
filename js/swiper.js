const swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 1500,
  debugger: true,
  mousewheel: true,
  loop: true,
  autoplay: {
    delay: 2500,
    diableOninteraction: false,
  },
});
