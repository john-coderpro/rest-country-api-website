const animateOnScroll = function () {
    const distanceToScreenLeftSide =
        this.boundingClientRect.left + this.boundingClientRect.width
        
    if (distanceToScreenLeftSide > 1100) {
        this.target.classList.add('animate-card-0')
        return
    }
    if (distanceToScreenLeftSide < 1100 && distanceToScreenLeftSide > 850) {
        this.target.classList.add('animate-card-1')
        return
    }

    if (distanceToScreenLeftSide < 850 && distanceToScreenLeftSide > 550) {
        this.target.classList.add('animate-card-2')
        return 
    }

    if (distanceToScreenLeftSide < 550) {
        this.target.classList.add('animate-card-3')
    }
}

export const initAnimateOnScroll = function () {
    const intersectionObserverForAnimation = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateOnScroll.call(entry)
                    intersectionObserverForAnimation.unobserve(entry.target)
                }
                    
            })
        },
        {
            root: null,
            threshold: 0.15,
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
