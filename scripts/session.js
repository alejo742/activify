const passwordImage = document.querySelectorAll('img[alt="lock icon"]');

passwordImage.forEach(img => {
    img.style.cursor = "pointer"
    img.addEventListener('click', () => {
        if(img.parentNode.children[1].type=="text") {
            img.parentNode.children[1].type="password"
        }
        else {
            img.parentNode.children[1].type="text"
        }
    })
})