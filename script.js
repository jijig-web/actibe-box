let toggleIcon = document.querySelector('.toggle')

toggleIcon.addEventListener('click', openMenu)

function openMenu() {
    let menu = document.querySelector('.menu-head')

    menu.classList.toggle('open')
}
