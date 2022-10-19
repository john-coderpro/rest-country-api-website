export const initGopherAnimation = function gopherAnimation() {
    const gopher = document.querySelector('.gopher')

    document.addEventListener('mousemove', (evt) => {
        const gopherBoundingRect = gopher.getBoundingClientRect()
        const rectMiddleX =
            gopherBoundingRect.left + gopherBoundingRect.width / 2
        const rectMiddleY =
            gopherBoundingRect.top + gopherBoundingRect.height / 2
        const mousePositionX = evt.clientX
        const mousePositionY = evt.clientY
        const dx = rectMiddleX - mousePositionX
        const dy = rectMiddleY - mousePositionY
        const angleInRad = Math.atan2(dy, dx)
        const angleInDeg = (angleInRad * 180) / Math.PI
        const eyes = document.querySelectorAll('.eye')

        eyes.forEach((eye) => {
            eye.style.transform = `rotate(${-60 + angleInDeg}deg)`
        })
    })
}
