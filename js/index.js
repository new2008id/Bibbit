const hamburger__menu = (burger) => {
    burger = document.querySelector('.hamburger__menu')
    hamburgerList = document.querySelector('.hamburger__menu-list')
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        let wrapperHide = document.querySelector('.wrapper')
        let welcome = document.querySelector('.welcome')
        welcome.classList.toggle('welcome__opacity')
        hamburgerList.classList.toggle('block')
        wrapperHide.classList.toggle('hide')
    })
}
hamburger__menu()


