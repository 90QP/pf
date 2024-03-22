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


// GSAP
const sections = document.querySelectorAll('section')

const io = new IntersectionObserver((entries, observer)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      const objName = entry.target.id   //내가 보고있는 section의 id만 인식
      funcObj[objName]();
    }
  })
})

let funcObj = {
  s1 : function(){
    const tl = gsap.timeline();
    tl.to('#s1 > *' , {
      opacity:1,
      delay:0.3,
      duraction:0.5,
      stagger:0.3,
      y:0
    })
  },
  s2 : function(){
    const tl = gsap.timeline();
    tl.to('#s2 .h2title', {
      opacity:1,
      duraction:0.5,
      stagger:0.3,
      y:0
    })

    tl.to('#s2 .s2_content > *', {
      opacity:1,
      duraction:0.5,
      stagger:0.3,
      y:0
    })

    tl.to('#s2 .skill_wrap > *' , {
      opacity:1,
      duraction:0.3,
      stagger:0.1,
      y:0
    })
  },
  s3 : function(){
    const tl = gsap.timeline();
    tl.to('#s3 .h2title', {
      opacity:1,
      duraction:0.5,
      stagger:0.3,
      y:0
    })

    tl.to('#s3 .s3_wrap > a', {
      opacity:1,
      duraction:0.4,
      stagger:0.2,
      y:0
    })
  },
  s4 : function(){
    const tl = gsap.timeline();
    tl.to('#s4 .h2title', {
      opacity:1,
      delay:0.3,
      duraction:0.5,
      stagger:0.3,
      y:0
    })

    tl.to('#s4 .s4_wrap > *' , {
      opacity:1,
      duraction:0.5,
      stagger:0.3,
      x:0
    })
  }
}


sections.forEach( section => io.observe(section))
