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

//*Show popups
const darkOverlay = document.querySelector('.dark-overlay')
const precisionPopup = document.querySelector('.precision-popup');
function showPrecisionExplanation() {
    precisionPopup.classList.toggle('visible')
    darkOverlay.classList.toggle('visible')
}

const timePopup = document.querySelector('.time-popup');
function showTimeExplanation() {
    timePopup.classList.toggle('visible')
    darkOverlay.classList.toggle('visible')
}

const hidePopups = document.querySelectorAll('.hide-popup');
hidePopups.forEach(button => {
    button.addEventListener('click', () => {
        button.parentNode.classList.toggle('visible');
        darkOverlay.classList.toggle('visible');
    })
})