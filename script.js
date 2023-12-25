let navbar = document.querySelector('.navbar');
let menubtn = document.querySelector('#menu-btn');

menubtn.onclick = () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    autoplay: {
        delay: 4500,
        disableonInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
}); 
var swiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
}); 

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = document.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
    food.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = food.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});


previewContainer.querySelector('#close-preview').onclick = () => {
    previewContainer.style.display = 'none';
    previewBox.forEach(close => {
        close.classList.remove('active');
    });
}



var swiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6500,
        disableonInteraction: false,
    },
}); 
var swiper = new Swiper(".blogs-slider", {
    grabCursor: true,
    loop:true,
    autoHeight:true,
    centeredSlides:true,
    spaceBetween:20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 6500,
        disableonInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
}); 

let submit = document.querySelector('#submit');
let popup = document.querySelector('#popup');
let close = document.querySelector('#close-popup');
let order = document.querySelector('.order');
let heading = document.querySelector('.order .heading');
let form = document.querySelector('.order form');
submit.onclick = () => {
    popup.classList.add('active');
    order.classList.add('overlay');
    heading.classList.add('overlay');
    form.reset();
}
close.onclick = () => {
    popup.classList.remove('active');
    order.classList.remove('overlay');
    heading.classList.remove('overlay');
}
