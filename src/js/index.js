//**TODO ==== === ===  Javascript With Tailwind CSS === === ===== */
//** === Variables === */
const btnMobileMenu = document.querySelector(`#idMobileMenu`);
const menuMobile = document.querySelector(`#idMenuMobile`);
const notification = document.querySelector(`#idNotification`);
const user = document.querySelector(`#user-menu-button`);
const dropdownNotification = document.querySelector(`#idDropdownPlus`);
const svgPlus = document.querySelector(`#idSvgPlus`);
const svg = document.querySelector(`#idSvg`);

//** === Events === */

user.addEventListener(`click`, () => {
  //console.log('Click');
  if (dropdownNotification.classList.contains(`hidden`)) {
    dropdownNotification.classList.add('visible');
    dropdownNotification.classList.remove('hidden');
  } else {
    dropdownNotification.classList.remove('visible');
    dropdownNotification.classList.add('hidden');
  }
  /* 
  if (dropdownNotification) {
    dropdownNotification.classList.toggle(`hidden`);
  } */
});

btnMobileMenu.addEventListener(`click`, () => {
  console.log('Mobile');

  if (menuMobile) {
    menuMobile.classList.toggle(`hidden`);
    svgPlus.classList.toggle(`hidden`);
    svg.classList.toggle(`hidden`);
  }
});
