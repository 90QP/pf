const menuBtn = document.querySelector('.menu_btn');
const $body = document.querySelector('body');
const menuNav = document.querySelector('.menu_wrap');
const boardBtm = document.querySelector('.board_btm');

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

menuNav.addEventListener('click', ()=>{
  $body.classList.remove('Open');
})


// 푸터 board 하단 고정
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      // footer가 뷰포트에 들어왔을 때 .btm의 스타일 변경
      boardBtm.classList.add('footerPos')
    } else {
      // footer가 뷰포트에 없을 때 .btm의 기본 스타일 적용
      boardBtm.classList.remove('footerPos')
    }
  });
}, { threshold: 0.1 }); // threshold: 0.1은 타겟 요소가 10% 보이기 시작할 때 콜백이 실행됨을 의미

// 관찰할 타겟 요소(footer) 설정
observer.observe(document.querySelector('footer'));

const topBtn = document.querySelectorAll('.btm_items_left span')

topBtn.forEach(()=>{
  topBtn[0].addEventListener('click',()=>{
    window.scrollTo({
      top:0
    })
  })

  topBtn[1].addEventListener('click',()=>{
    const location = document.querySelector("#s3").offsetTop;

    window.scrollTo({
      top:location
    })
  })
})