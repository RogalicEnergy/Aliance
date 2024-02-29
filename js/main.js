const navbar = document.querySelector(".navbar");
const logoLight = document.querySelector(".logo-light");
const logo = document.querySelector(".logo");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");
const isFront = document.body.classList.contains("front-page");

const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
}
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
}


const changeNavHeight = (height) => {
  navbar.style.height = height;
};



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
  this.scrollY > 1 ? changeNavHeight('4.5rem') : changeNavHeight('5.875rem');
  if (isFront) {
    this.scrollY > 1 ? lightModeOn() : lightModeOff();
    
  }
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


modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add('is-open');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});


const forms = document.querySelectorAll("form"); /* собираем все формы */
forms.forEach((form) => {
  const validation = new JustValidate(form, {
    errorFieldCssClass: "is-invalid",
  });
  validation
    .addField("[name=username]", [
      {
        rule: "required",
        errorMessage: "Укажите имя",
      },
      {
        rule: "maxLength",
        value: 50,
        errorMessage: "Максимально 50 символов",
      },
    ])
    .addField("[name=userphone]", [
      {
        rule: "required",
        errorMessage: "Укажите номер телефона",
      },
    ])
    .onSuccess((event) => {
      const thisForm = event.target;
      const formData = new FormData(thisForm);
      const ajaxSend = (formData) => {
        fetch(thisForm.getAttribute("action"), {
          method: thisForm.getAttribute("method"),
          body: formData,
        }).then((response) => {
          if (response.ok) {
            thisForm.reset();
            alert("Форма отправлена!")
          } else {
            alert(response.statusText);
          }
        });
      };
      ajaxSend(formData);
    });
});

