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