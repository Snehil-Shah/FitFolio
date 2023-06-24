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
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        600:{
            slidesPerView:2,
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

// login panel popup code
const wrapper = document.querySelector('.wrapper')
const btnpopup = document.querySelector('#login-topright')
const closepanel = document.querySelector('.close-btn')
const loginlink = document.querySelector('.login-link')
const registerlink = document.querySelector('.register-link')

registerlink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})
loginlink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
})
btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})
closepanel.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})

// =====
const regpopup1 = document.querySelector('#regpopup1')
const regpopup2 = document.querySelector('#regpopup2')
const regpopup3 = document.querySelector('#regpopup3')
const regpopup4 = document.querySelector('#regpopup4')
const regpopup5 = document.querySelector('#regpopup5')
const regpopup6 = document.querySelector('#regpopup6')
const regpopup7 = document.querySelector('#regpopup7')
regpopup1.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})
regpopup2.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})
regpopup3.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})
regpopup4.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})
regpopup5.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})
regpopup6.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})
regpopup7.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})
//=====