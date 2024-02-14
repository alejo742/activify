const textInputs = document.querySelectorAll('input[type="text"], #activity-content-input')

textInputs.forEach(textInput => {
    let maxInputLength = textInput.maxLength 
    let maxLengthCounter = textInput.parentNode.children[2]

    textInput.oninput = () => {
        let textLength = textInput.value.length 
        
        maxLengthCounter.innerHTML = `${textLength}/${maxInputLength}`
    }
})

const keywordsBox = document.getElementById('activity-keywords-box')
const keywordInput = document.getElementById('activity-keyword-input')
let keywordCounter = 0

keywordsBox.onclick = () => {
    if(keywordInput.value.length > 2 && keywordInput.value[0] != keywordInput.value[1] && keywordCounter < 5 && /^[a-zA-Z]+$/.test(keywordInput.value)) {
        if(keywordCounter < 1) {
            createKeywordSpan(keywordInput.value)
            keywordCounter++
            keywordsBox.parentNode.children[2].innerHTML =`${keywordCounter}/${5}`
        }
        else {
            if(compareKeywords(keywordInput.value)) {
                createKeywordSpan(keywordInput.value)
                keywordCounter++
                keywordsBox.parentNode.children[2].innerHTML =`${keywordCounter}/${5}`
                keywordError('')
            }
            else {
                keywordError('')
                setTimeout( () => {
                    keywordError('Error. Ya introduciste una palabra igual.')
                }, 50)
            }
        }
        
    }
    else {
        keywordError('')
        setTimeout( () => {
            keywordError('Error. Puede que hayas alcanzado el límite de palabras o la palabra no sea válida.')
        }, 50)
    }
}

function setSpanClosingListener(element) {
    //Eliminate keywords when clicking X
    element.addEventListener('click', (e) => {
        e.stopImmediatePropagation()
        
        element.parentNode.remove()
        keywordCounter--
        keywordsBox.parentNode.children[2].innerHTML =`${keywordCounter}/${5}`
    })
}


function compareKeywords(element) {
    //Compare keywords between diff in the box
    const keywords = document.querySelectorAll('.activity-keyword')
    for(let i = 0; i < keywords.length; i++) {
        if(keywords[i].children[0].innerHTML.toLowerCase() == element.toLowerCase()) {
            //Keywords are equal
            return false
        }

    }
    return true
}


function createKeywordSpan(content) {
    let newSpan = document.createElement('span')
    newSpan.classList.add('activity-keyword')

    let innerSpan = document.createElement('span')
    innerSpan.innerHTML = content
    keywordsBox.append(newSpan)

    let closeButton = document.createElement('a')

    newSpan.append(innerSpan)
    newSpan.append(closeButton)
    setSpanClosingListener(closeButton)
}

function keywordError(message) {
    const errorMessage= document.getElementById('keywords-error-message')
    errorMessage.innerHTML = message
}

