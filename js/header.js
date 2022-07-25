const htmlBody = document.querySelector('body');
const burger = document.querySelector(".burger");
const menu = document.querySelector('.menu');
const menu_botton = document.querySelectorAll('.menu-botton');
const menu_modal = document.querySelector('.menu-modal');
const menu_link_button = document.querySelector('.menu-link-button');
const btt = document.querySelector('.btt');

AOS.init();

burger.addEventListener("click", () => {
    burger.classList.toggle("on")
    menu.classList.toggle('on')
    htmlBody.classList.toggle('overflow-hidden')

    if (!burger.classList.contains('on')) {
        removeActive()
    }
})

function removeActive() {
    menu_botton.forEach(e => {
        e.classList.remove('active')
    })
    menu_modal.classList.remove('active');
}

menu_botton.forEach(e => {
    e.addEventListener('click', () => {
        if (e.classList.contains('active')) {
            e.classList.remove('active')
            menu_modal.classList.remove('active');
        } else {
            menu_botton.forEach(e => e.classList.remove('active'))
            e.classList.toggle('active')
            menu_modal.classList.add('active');
        }
    })
})

menu_link_button.addEventListener('click', () => {
    removeActive();
})
