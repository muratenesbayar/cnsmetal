var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true
    });

var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
