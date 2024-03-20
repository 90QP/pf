const menuBtn = document.querySelector('.menu_btn');
const $body = document.querySelector('body');
const menuNav = document.querySelector('.menu_wrap');

menuBtn.addEventListener('click',()=>{
  $body.classList.toggle('Open');
})

window.addEventListener('scroll',()=>{
  let y = scrollY;

  if(y >= 100){
    menuBtn.classList.add('scroll')
  } else {
    menuBtn.classList.remove('scroll')
  }
})

var swiper = new Swiper(".detailSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },      
  hashNavigation: {
    watchState: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


