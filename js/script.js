$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:5
        },
        1000:{
            items:6
        },
        1500:{
            items:8
        }
    }
})


let button = document.querySelector('.butt-mobile');

button.addEventListener('click', clickActive);

function clickActive() {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}


let log = document.querySelector('.more-log');

log.addEventListener('click', clickLog);

function clickLog() {
    let cont = document.querySelector('.container-2');
    cont.classList.toggle('ativado');
}