//Hovering nav elements functionality
const navElements = document.querySelectorAll('.nav-element');
const highlighted = document.querySelector('.nav-element.selected')
navElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('current')
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove('current')
        highlighted.classList.add('current')
    })
})

//* Hamburger animation
///////////////////////////////////////////
// The click
const burgerMenu = document.querySelector('.burger1');
const dropdown = document.querySelector('.dropdown-content')
burgerMenu.classList.add('unToggled')
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('toggled')
    burgerMenu.classList.toggle('unToggled')
    dropdown.classList.toggle('visible')
})