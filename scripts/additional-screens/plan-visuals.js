function changePlanView() {
    var selectedPlan = document.querySelector('.plan-selector.selected');
    const unselectedPlan = document.querySelector('.plan-selector:not(.selected)');
    const selectionBackground = document.querySelector('.selected-background')

    selectedPlan.classList.remove('selected')
    unselectedPlan.classList.add('selected')
    selectionBackground.classList.toggle('right')

    const annualPriceList = ['S/0.00', 'S/10', 'S/20', 'A medida']
    const monthlyPriceList = ['S/0.00', 'S/15', 'S/30', 'A medida']
    selectedPlan = document.querySelector('.plan-selector.selected');

    if(selectedPlan.classList.contains('annual')) {
        changePlanCosts(annualPriceList)
    }
    else {
        changePlanCosts(monthlyPriceList)
    }
}
function changePlanCosts(priceArray) {
    const prices = document.querySelectorAll('.plan-price');

    for(let i = 0; i < 4; i++) {
        prices[i].innerHTML = priceArray[i]
    }
}

const planSelectors = document.querySelectorAll('.plan-selector')

planSelectors.forEach(selector => {
    selector.addEventListener('click', () => {
        if(selector.classList.contains('selected')) {
            return
        }
        else {
            changePlanView()
        }
    })
})