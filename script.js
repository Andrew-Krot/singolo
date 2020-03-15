window.onload = function () {
    // MENU
    addMenuClickHandler();

    // PORTFOLIO-TAGS
    addTagsClickHandler();

    // PORTFOLIO-ITEMS
    addImageClickHandler();
}

//  HEADER-MENU

const addMenuClickHandler = () => {
    document.querySelector('.menu').addEventListener('click', (e) => {
        if (e.target.classList.contains('item')) {
            let clickedItem = e.target;
            removeSelectedItems();
            selectClickedItem(clickedItem);
        }
    })
}

const removeSelectedItems = () => {
    let items = document.querySelectorAll('.menu .item');
    items.forEach(item => {
        item.classList.remove('active');
    })
}

const selectClickedItem = (clickedItem) => {
    clickedItem.classList.add('active');
}

//  PHONE-CLICK

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

// PORTFOLIO-TAGS

const addTagsClickHandler = () => {
    document.querySelector('.portfolio__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
        }
    })
}

const removeSelectedTag = () => {
    let tags = document.querySelectorAll('.portfolio__tags .tag');
    tags.forEach(tag => {
        tag.classList.remove('tag_selected');
    })
}

const selectClickedTag = (clickedTag) => {
    clickedTag.classList.add('tag_selected');
}

// PORTFOLIO-IMAGES-active

const addImageClickHandler = () => {
    document.querySelector('.portfolio__items').addEventListener('click', (e) => {
        if (e.target.classList.contains('portfolio__item')) {
            let clickedImg = e.target;
            removeSelectedImg();
            selectClickedImg(clickedImg);
        }
    })
}

const removeSelectedImg = () => {
    let imgs = document.querySelectorAll('.portfolio__items .portfolio__item');
    imgs.forEach(img => {
        img.classList.remove('portfolio__item-active');
    })
}

const selectClickedImg = (clickedImg) => {
    clickedImg.classList.add('portfolio__item-active');
}