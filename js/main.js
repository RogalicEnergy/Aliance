const navbar = document.querySelector(".navbar");
const logo = document.querySelector(".logo-svg use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");


const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo";
}
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
  logo.href.baseVal = "img/sprite.svg#logo-light";
}


const openMenu = (event) => {  // функция открывания меню
  menu.classList.add("is-open");  // вешает класс is open
  mMenuToggle.classList.add("close-menu");
  document.body.style.overflow="hidden"; // запрещаем прокрутку сайта под меню
  lightModeOn();
}
const closeMenu = (event) => {  // функция закрытия меню
  menu.classList.remove("is-open");  // убирает класс is open
  mMenuToggle.classList.remove("close-menu");
  document.body.style.overflow=""; // возвращает прокрутку сайта под меню
  lightModeOff();
}


window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains('is-open') ? closeMenu() : openMenu();
})

const swiperSteps = new Swiper('.steps-slider', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.steps-button-next',
    prevEl: '.steps-button-prev',
  },
  breakpoints: {
    560: {
      slidesPerView: 2,
      centeredSlides: true,
      slidesOffsetBefore: -60,
      slidesOffsetAfter: -100,
    },
    750: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});

const swiper = new Swiper('.features-slider', {
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  breakpoints: {
    560: {
      slidesPerView: 1,
      centeredSlides: true,
      slidesOffsetBefore: -60,
      slidesOffsetAfter: -100,
    },
    750: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});

const swiperBlog = new Swiper('.blog-slider', {
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.blog-button-next',
    prevEl: '.blog-button-prev',
  },
  breakpoints: {
    740: {
      slidesPerView: 2,
    },
  }

});


const modal = document.querySelector(".modal");
const modalToggle = document.querySelectorAll("[data-toggle=modal]");
const modalClose = document.querySelector(".modal-close")
console.log(modalToggle);
modalToggle.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.add('is-open')
  });
});

modalClose.addEventListener("click", (event) => {
    event.preventDefault();
    modal.classList.remove("is-open");
});