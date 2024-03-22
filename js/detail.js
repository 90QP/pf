const menuBtn = document.querySelector('.menu_btn');
const $body = document.querySelector('body');
const menuNav = document.querySelector('.menu_wrap');
const topBtn = document.querySelectorAll('.btm_items_left span');

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




topBtn.forEach(()=>{
  topBtn[0].addEventListener('click',(e)=>{
    location.replace('index.html');
  })

  topBtn[1].addEventListener('click',(e)=>{
    location.replace('index.html#s3');
  })
})
