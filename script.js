//  Active-menu 

const MENU = document.getElementById('menu');


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

//  Phone Click

const verticalBtn = document.getElementById('vertical-phone-btn');
const verticalDisplay = document.getElementById('vertical-phone-display');

const horizontalBtn = document.getElementById('horizontal-phone-btn');
const horizontalDisplay = document.getElementById('horizontal-phone-display');

let countClickVertical = 0;
let countClickHorizontal = 0;


verticalBtn.onclick = function () {
    countClickVertical++;
    if (countClickVertical % 2 == 0) {
        verticalDisplay.classList.remove('slider__item-phone-display-hidden');
    } else {
        verticalDisplay.classList.add('slider__item-phone-display-hidden');
    }
}

horizontalBtn.onclick = function () {
    countClickHorizontal++;
    if (countClickHorizontal % 2 == 0) {
        horizontalDisplay.classList.remove('slider__item-phone-display-hidden');
    } else {
        horizontalDisplay.classList.add('slider__item-phone-display-hidden');
    }
}

//  SLIDER 
const slider = document.getElementById('slider')
const slide_1 = document.getElementById('slide-1');
const slide_2 = document.getElementById('slide-2')

const leftArrow = document.getElementById('slider-left-arrow');
const rightArrow = document.getElementById('slider-right-arrow');

let countClickArrow = 0;

leftArrow.onclick = function () {
    countClickArrow++;
    if (countClickArrow % 2 == 0) {
        slide_1.querySelector('.slider__item-vertical-phone').classList.remove('slider-none');
        slide_1.querySelector('.slider__item-horizontal-phone').classList.remove('slider-none');
        slide_2.classList.add('slider-none');
        slider.classList.remove('slide-2__bg');
    } else {
        slide_1.querySelector('.slider__item-vertical-phone').classList.add('slider-none');
        slide_1.querySelector('.slider__item-horizontal-phone').classList.add('slider-none');
        slide_2.classList.remove('slider-none');
        slider.classList.add('slide-2__bg');
    }
}

rightArrow.onclick = function () {
    countClickArrow++;
    if (countClickArrow % 2 == 0) {
        slide_1.querySelector('.slider__item-vertical-phone').classList.remove('slider-none');
        slide_1.querySelector('.slider__item-horizontal-phone').classList.remove('slider-none');
        slide_2.classList.add('slider-none');
        slider.classList.remove('slide-2__bg');
    } else {
        slide_1.querySelector('.slider__item-vertical-phone').classList.add('slider-none');
        slide_1.querySelector('.slider__item-horizontal-phone').classList.add('slider-none');
        slide_2.classList.remove('slider-none');
        slider.classList.add('slide-2__bg');
    }
}