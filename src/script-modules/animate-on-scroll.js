// because the animateOnScroll function is invocated
// in an intersection observer,
// the value of the distance to the left side changes frequently
// during the animation, multiple classes are then added to the
//  card as it moves to its primary position and it creates a bad
// effect. the following regex will ensure that no class is added to
// a card that already has an animation given to it with its
// characteristics at its very first position when it enters
// the browser viewport. however, this will also cause another issue
// particualary if the user filter or search for coutries
// and then display again all the country and starts scrolling.
// since searching an filtering are managed by hiding cards
// with the display of none , the layout is
// recalculated and certains cards enter the viewport at a position
// they actually wouldn't if the user would just scroll. they then receive
// an animation which is fitting at that position.
// because of that, if the user display all the countries again
// and scroll, certain cards will not animate another time
// because they would have received their animation during the
// filtering or searching.
// nevertheless , I will just leave like that because I
// have not come up with a better solution yet.

const animateOnScroll = function () {
    const hasAnimateClass = /animate-card-\d/g
    const distanceToScreenLeftSide =
        this.boundingClientRect.left + this.boundingClientRect.width
        
    if (distanceToScreenLeftSide > 1100) {
        if (this.isIntersecting) {
            this.target.classList.add('animate-card-0')
        }
    }
    if (distanceToScreenLeftSide < 1100 && distanceToScreenLeftSide > 850) {
        if (
            this.isIntersecting &&
            !hasAnimateClass.test(this.target.className)
        ) {
            this.target.classList.add('animate-card-1')
        }
    }

    if (distanceToScreenLeftSide < 850 && distanceToScreenLeftSide > 550) {
        if (
            this.isIntersecting &&
            !hasAnimateClass.test(this.target.className)
        ) {
            this.target.classList.add('animate-card-2')
        }
    }

    if (distanceToScreenLeftSide < 550) {
        if (
            this.isIntersecting &&
            !hasAnimateClass.test(this.target.className)
        ) {
            this.target.classList.add('animate-card-3')
        }
    }
}

export const initAnimateOnScroll = function () {
    const intersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                animateOnScroll.call(entry)
            })
        },
        {
            root: null,
            threshold: 0.25,
        }
    )

    const prefersReducedMotion = window.matchMedia('prefers-reduced-motion')
    let nodeCount = 1
    const mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === 'childList' &&
                !prefersReducedMotion.matches
            ) {
                const CurrentCard = mutation.target.querySelector(
                    `.country-card:nth-child(${nodeCount})`
                )
                intersectionObserver.observe(CurrentCard)
                nodeCount++
            }
        })
    })

    const main = document.querySelector('main')
    mutationObserver.observe(main, { childList: true })
}
