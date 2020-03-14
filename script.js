const MENU = document.getElementById('menu');


MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

//  Phone Click

let verticalBtn = document.getElementById('vertical-phone-btn');
let verticalDisplay = document.getElementById('vertical-phone-display');

let horizontalBtn = document.getElementById('horizontal-phone-btn');
let horizontalDisplay = document.getElementById('horizontal-phone-display')

let countClickVertical = 0;
let countClickHorizontal = 0;


verticalBtn.onclick = function () {
    countClickVertical++;
    if (countClickVertical % 2 == 0) {
        verticalDisplay.classList.remove('slider__item-horizontal-phone-display-hidden')
        console.log(countClickVertical)
    } else {
        verticalDisplay.classList.add('slider__item-horizontal-phone-display-hidden')
        console.log(countClickVertical)
    }
}

horizontalBtn.onclick = function () {
    countClickHorizontal++;
    if (countClickHorizontal % 2 == 0) {
        horizontalDisplay.classList.remove('slider__item-horizontal-phone-display-hidden')
        console.log(countClickHorizontal)
    } else {
        horizontalDisplay.classList.add('slider__item-horizontal-phone-display-hidden')
        console.log(countClickHorizontal)
    }
}