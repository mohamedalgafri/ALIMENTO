
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
  const header = document.getElementById('navbar')
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 0 ? header.classList.add('scroll-nav') 
                     : header.classList.remove('scroll-nav')
}
window.addEventListener('scroll', scrollHeader)




/////////////////////////////////////swiper header/////////////////////////////////////////////

var swiper = new Swiper(".mySwiperheder", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

/////////////////////////////////////swiper 2/////////////////////////////////////////////

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});


//////////////////////////////////////SwiperProdact////////////////////////////////////////


var swiper = new Swiper(".mySwiperPro", {
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    470: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/////////////////////////////////////////////////////////


var nonLinearStepSlider = document.getElementById('slider-non-linear-step');

noUiSlider.create(nonLinearStepSlider, {
    start: [150, 350],
    direction: 'rtl',
    connect: true,
    range: {
        'min': [0],
        'max': [500]
    }
});


var nonLinearStepSliderValueElement = document.getElementById('slider-non-linear-step-value');

nonLinearStepSlider.noUiSlider.on('update', function (values) {
    nonLinearStepSliderValueElement.innerHTML = values.join(' - ');
});
