const changeTheme = function () {
    const root = document.querySelector('html')

    if (root.className === 'dark') {
        root.className = 'light'
        this.querySelector('use').setAttribute('href', '#moon_icon')
        this.querySelector('span > span').textContent = 'dark'
    } else {
        root.className = 'dark'
        this.querySelector('use').setAttribute('href', '#sun_icon')
        this.querySelector('span > span').textContent = 'light'
    }
}
export const initThemeToggling = function () {
    const themeToggleBtn = document.querySelector('.button--toggle-theme')
    themeToggleBtn.addEventListener('click', changeTheme)
}
