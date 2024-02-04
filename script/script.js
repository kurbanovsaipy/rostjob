const recrutsMenu = document.getElementById('recruts');
const recrutsBtn = document.getElementById('recruts_btn');
const consumerMenu = document.getElementById('consumer');
const consumerBtn = document.getElementById('consumer_btn');
const header = document.querySelector('header');
const html = document.querySelector('html');

function toogleMenu(e) {
    e.classList.toggle('open');
    header.classList.toggle('active');
    html.classList.toggle('hidden');
}

recrutsBtn.addEventListener('click', () => {
    toogleMenu(recrutsMenu);
    header.classList.add('active');
})

consumerBtn.addEventListener('click', () => {
    toogleMenu(consumerMenu);
    header.classList.add('active');
})

function closeSearchMenu(e) {
    toogleMenu(e);
}

function openInMenu() {
    toogleMenu(consumerMenu);
    toogleMenu(recrutsMenu);
}

/*-------*/
window.addEventListener('scroll', () => {
    if(window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
})
/*-----------Скролл поверх страницы-------------*/ 
var {OverlayScrollbars} = OverlayScrollbarsGlobal;
const osInstance = OverlayScrollbars(document.querySelector('body'), {});
/*---------menu_burger----------*/
const menuBurger = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger_button');
const anchor = document.querySelectorAll('.anchor');

function closeBurger() {
    menuBurger.classList.toggle('open');
    html.classList.toggle('hidden');
}

const isOpen = (function(){
    return menuBurger.classList.contains('open');
});

burgerButton.addEventListener('click', () => {
    closeBurger();
})

document.addEventListener('click', (e) => {
    e = e.target;

    const menu = e == menuBurger || menuBurger.contains(e);
    const head = e == header;
    const isButton = e == burgerButton;

    if(!menu && !head && isOpen() && !isButton){
        closeBurger();
    }
})

anchor.forEach((el) => el.addEventListener('click', () => {
    const openMenu = document.querySelectorAll('.open');
    openMenu.forEach((element) => element.classList.remove('open'));
    html.classList.remove('hidden');
}))


const search_menu_recrut = document.getElementById('recruts');
const search_menu_consumer = document.getElementById('consumer');
const search_menu = document.querySelectorAll('.search_menu');

search_menu.forEach((el) => el.addEventListener('touchstart', handleTouchStart, false));

search_menu_recrut.addEventListener('touchmove', handleTouchMoveRecrut, false);
search_menu_consumer.addEventListener('touchmove', handleTouchMoveConsumer, false);

let x1 = 0;
let y1 = 0;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchMoveRecrut(event) {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            search_menu_recrut.classList.remove('open');
            search_menu_consumer.classList.add('open');
        } 
    } 

    x1 = null;
    y1 - null;
}

function handleTouchMoveConsumer(event) {
    if (!x1 || !y1) {
        return false;
    }
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff < 0) {
            search_menu_recrut.classList.add('open');
            search_menu_consumer.classList.remove('open');
        }
    }

    x1 = null;
    y1 - null;
}