// because the animateOnScroll function is invocated
// in an intersection observer,
// the value of the distance to the left side changes frequently
// during the animation, multiple classes are then added to the
//  card as it moves to its primary position and it creates a bad
// effect. the following regex will ensure that no class is added to
// a card that already has an animation given to it with its
// characteristics at its very first position when it enters
// the browser viewport.

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
    const intersectionObserverForAnimation = new IntersectionObserver(
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
                !prefersReducedMotion.matches &&
                mutation.addedNodes.length
            ) {
                const CurrentCard = mutation.target.querySelector(
                    `.country-card:nth-child(${nodeCount})`
                )
                intersectionObserverForAnimation.observe(CurrentCard)
                nodeCount++
            } 
            if (mutation.type === 'childList' && mutation.removedNodes.length) nodeCount--
        })
    })

    const main = document.querySelector('main')
    mutationObserver.observe(main, { childList: true })
}
