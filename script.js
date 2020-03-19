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

const onScroll = (event) => {
    const curPos = window.scrollY + 95;
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.menu > li > a');

    sections.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            })
        }
    })
}

document.addEventListener('scroll', onScroll);

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

const slider = document.getElementById('slider');
const slider_bottom = document.getElementById('slider__bottom');
const slide_1 = document.getElementById('slide-1');
const slide_2 = document.getElementById('slide-2');

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
        slider_bottom.classList.remove('slider__bottom-slide-2');
    } else {
        slide_1.querySelector('.slider__item-vertical-phone').classList.add('slider-none');
        slide_1.querySelector('.slider__item-horizontal-phone').classList.add('slider-none');
        slide_2.classList.remove('slider-none');
        slider.classList.add('slide-2__bg');
        slider_bottom.classList.add('slider__bottom-slide-2');
    }
}

rightArrow.onclick = function () {
    countClickArrow++;
    if (countClickArrow % 2 == 0) {
        slide_1.querySelector('.slider__item-vertical-phone').classList.remove('slider-none');
        slide_1.querySelector('.slider__item-horizontal-phone').classList.remove('slider-none');
        slide_2.classList.add('slider-none');
        slider.classList.remove('slide-2__bg');
        slider_bottom.classList.remove('slider__bottom-slide-2');
    } else {
        slide_1.querySelector('.slider__item-vertical-phone').classList.add('slider-none');
        slide_1.querySelector('.slider__item-horizontal-phone').classList.add('slider-none');
        slide_2.classList.remove('slider-none');
        slider.classList.add('slide-2__bg');
        slider_bottom.classList.add('slider__bottom-slide-2');
    }
}

// PORTFOLIO-TAGS

const addTagsClickHandler = () => {
    document.querySelector('.portfolio__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickedTag = e.target;
            removeSelectedTag();
            selectClickedTag(clickedTag);
            removeSelectedImg();
            shuffleImgs();
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

const shuffleImgs = () => {
    let first = document.querySelector('.portfolio__items').firstElementChild;
    let last = document.querySelector('.portfolio__items').lastElementChild;
    first.before(last);
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

// MODAL-WINDOW

const button = document.getElementById('btn');
const close_button = document.getElementById('close-btn');

button.addEventListener('click', () => {
    const subject = document.getElementById('subject').value.toString();
    const describe = document.getElementById('describe').value.toString();
    const name = document.getElementById('name').value.toString();
    const email = document.getElementById('email').value.toString();
    document.getElementById('message-block').classList.remove('hidden');

    (name.length == 0 || email.length == 0) ? document.getElementById('message-status').innerText = 'Письмо не отправлено, необходимо заполнить обязательные поля (Name, Email)': document.getElementById('message-status').innerText = 'Письмо отправлено';

    subject.length == 0 ? document.getElementById('subject-result').innerText = 'Без темы' :
        document.getElementById('subject-result').innerText = subject;

    describe.length == 0 ? document.getElementById('describe-result').innerText = 'Без описания' :
        document.getElementById('describe-result').innerText = describe;
})

close_button.addEventListener('click', () => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('describe-result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('form').reset()

})