"use strict";
const navCheck = document.querySelector(".navigation__checkbox");
const navButton = document.querySelector(".navigation__button");
const nav = document.querySelector(".navigation__nav");
const background = document.querySelector(".navigation__background");
const links = document.querySelectorAll(".navigation__link");

const popup = document.querySelector(".popup");
const popupOpenBtns = document.querySelectorAll(".popup__open");
const popupContent = document.querySelectorAll(".popup__content");

//! HAMBURGER MENU
const controlMenu = function () {
  navButton.addEventListener("click", function () {
    if (navCheck.checked) {
      closeMenu();
      navCheck.checked = true;
    } else {
      background.style.transform = "scale(180)";
      nav.style.opacity = 1;
      nav.style.visibility = "visible";
    }
  });
};

const clickLink = function () {
  links.forEach((link) => {
    link.addEventListener("click", function () {
      closeMenu();
    });
  });
  nav.addEventListener("click", function () {
    closeMenu();
  });
};

const closeMenu = function (check = true) {
  background.style.transform = "scale(0)";
  nav.style.opacity = 0;
  nav.style.visibility = "hidden";
  navCheck.checked = !check;
};

const init = function () {
  clickLink();
  controlMenu();
  controlModal();
};

//! POPUP
const popupOpen = function () {
  popup.style.opacity = 1;
  popup.style.visibility = "visible";
  popup.style.transition = "all 0.5s 0.2s";
  popupContent.style.opacity = 1;
};

for (let i = 0; i < popupOpenBtns.length; i++) {
  popupOpenBtns[i].addEventListener("click", popupOpen);
}

const popupClose = function () {
  popup.style.opacity = 0;
  popup.style.visibility = "hidden";
  // URL'yi güncelle
  history.pushState(null, null, "#section-tours");
};

const controlModal = function () {
  for (let i = 0; i < popupOpenBtns.length; i++) {
    popupOpenBtns[i].addEventListener("click", popupOpen);
  }
  popup.addEventListener("click", popupClose);
};

init();
