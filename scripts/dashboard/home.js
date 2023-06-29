//Hovering nav elements functionality
const navElements = document.querySelectorAll('.nav-element');
navElements.forEach(element => {
    var highlighted;
    if(element.classList.contains('current')) {
        highlighted = element
    }
    element.addEventListener('mouseover', () => {
        element.classList.add('current')
    })
    element.addEventListener('mouseout', () => {
        element.classList.remove('current')
        highlighted.classList.add('current')
    })
})