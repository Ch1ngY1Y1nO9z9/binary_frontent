burger = document.querySelector(".burger");
menu = document.querySelector('.menu');
menu_botton = document.querySelectorAll('.menu-botton');
menu_modal = document.querySelector('.menu-modal');
menu_link_button = document.querySelector('.menu-link-button');

burger.addEventListener("click", () => {
    burger.classList.toggle("on")
    menu.classList.toggle('on')

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
        } else {
            menu_botton.forEach(e => e.classList.remove('active'))
            e.classList.toggle('active')
            menu_modal.classList.add('active');
        }
    })
})

menu_link_button.addEventListener('click', () => {
    menu_modal.classList.remove('active');
})
