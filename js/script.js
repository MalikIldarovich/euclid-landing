// Блок бургер-меню
{
  let menu = document.querySelector(".header__nav");
  let burger = document.querySelector(".burger");
  let menuLinks = document.querySelectorAll(".nav__link");

  burger.addEventListener("click", function () {
    menu.classList.toggle("header__nav--active");
    burger.classList.toggle("burger--active");
    document.body.classList.toggle("stop-scroll");
  });
  menuLinks.forEach(function (el) {
    el.addEventListener("click", function () {
      burger.classList.remove("burger--active");
      menu.classList.remove("header__nav--active");
      document.body.classList.remove("stop-scroll");
    });
  });
}

// Блок поиска
{
  let search = document.querySelector(".search");
  let nav = document.querySelector(".header__nav");
  let magnifier = document.querySelector(".magnifier");
  let searchClose = document.querySelector(".search__close");
  let logo = document.querySelector(".logo");
  let burger = document.querySelector(".burger");

  magnifier.addEventListener("click", function () {
    nav.classList.add("hidden"), search.classList.add("search--active");
    logo.classList.add("logo--hidden");
    burger.classList.add("burger--hidden");
    magnifier.classList.add("magnifier--active");

    searchClose.addEventListener("click", function () {
      search.classList.remove("search--active");
      nav.classList.remove("hidden");
      logo.classList.remove("logo--hidden");
      burger.classList.remove("burger--hidden");
      magnifier.classList.remove("magnifier--active");
    });
  });
}

// Блок слайдера
{
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    direction: "horizontal",
    loop: true,
    spaceBetween: 200,
    autoplay: {
      delay: 2000,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },

    autoHeight: true,
  });
}

// Блок Табов
{
  let servicesLink = document.querySelectorAll(".services__link");
  let servicesLeft = document.querySelectorAll(".services__left");
  let servicesImg = document.querySelectorAll(".services__right");

  servicesLink.forEach(function (element) {
    element.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      servicesLink.forEach(function (btn) {
        btn.classList.remove("services__link--active");
      });
      e.currentTarget.classList.add("services__link--active");

      servicesLeft.forEach(function (el) {
        el.classList.remove("services--active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("services--active");

      servicesImg.forEach(function (el) {
        el.classList.remove("services__right--active");
      });
      document
        .querySelector(`[data-select="${path}"]`)
        .classList.add("services__right--active");
    });
  });
}

// Блок Аккордиона
{
  new Accordion(".accordion");
}
