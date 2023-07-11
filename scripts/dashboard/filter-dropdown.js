const filterDropdownButton = document.querySelector('.filter-dropdown');
const filterDropdownContent = document.querySelector('.filter-dropdown-content');
const filterOptions = document.querySelectorAll('.filter-dropdown-content span');
const currentFilter = document.querySelector('.current-filter-option')

filterDropdownButton.addEventListener('click', () => {
    filterDropdownContent.classList.toggle('hidden');
})
filterOptions.forEach(option => {
    option.addEventListener('click', () => {
        currentFilter.innerHTML = option.innerHTML
        filterOptions.forEach(element => {
            element.classList.remove('selected')
        })
        option.classList.add('selected')
    })
})