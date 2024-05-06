/* <!-- header section js start --> */
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};


var swiper = new Swiper(".home-slider", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });
  
  
  /* <!-- header section js end --> */
  
  /*-- about page start */
  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    autoHeight:true,
    // pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    breakpoints: {
      640: {
         slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
       1024: {
         slidesPerView: 3,
        },
      },
    });
    /*-- about page end */


  /*-- package page start */
let loadMoreBtn=document.querySelector('.packages .load-more .btn');
let currentItem=3;
loadMoreBtn.onclick=()=>{
  let boxes=[...document.querySelectorAll('.packages .box-container .box')];
  for(var i=currentItem; i<currentItem +3; i++){
    boxes[i].style.display='inline-block';

  };
  currentItem +=3;
  if(currentItem >= boxes.length){
    loadMoreBtn.style.display='none';
  }
}
  /*-- package page end */ 
