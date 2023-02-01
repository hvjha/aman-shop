let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    // shoppingcart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}
let login = document.querySelector('.log-in');

document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    // login.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    login.classList.remove('active');
    // navbar.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    login.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    // slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    // slidesPerView: 1,
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 4,
      },
    },
});