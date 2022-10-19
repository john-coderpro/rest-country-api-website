const isFocusingOut = function () {
    if (!this.parentElement.classList.contains('isfocused')) return
    this.parentElement.classList.remove('isfocused')

    if (this.value === '') {
        const label = this.parentElement.querySelector('label')
        const icon = this.parentElement.querySelector('svg')
        label.classList.remove('visually-hidden')
        icon.classList.remove('visually-hidden')
        this.removeAttribute('style')
    }
    this.removeEventListener('focusout', isFocusingOut)
}

// will be used in the index.js file inside an IIFE
const isFocusingIn = function () {
    if (this.parentElement.classList.contains('isfocused')) return
    this.parentElement.classList.add('isfocused')
    this.style.width = '100%'
    const label = this.parentElement.querySelector('label')
    const icon = this.parentElement.querySelector('svg')
    if (!label.classList.contains('visually-hidden')) {
        label.classList.add('visually-hidden')
        icon.classList.add('visually-hidden')
    }
    this.addEventListener('focusout', isFocusingOut)
}
export const initStyleInputOnFocus = function() {
    const searchInput = document.querySelector('input[type=search]')
    searchInput.addEventListener('focusin', isFocusingIn)
}
