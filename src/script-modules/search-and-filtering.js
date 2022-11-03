import { helpers } from './helpers'
import { initApp } from './populate-main'
import { createCard } from './create-card'
import {  startObservation} from './populate-main'

// the goal of this generator function is to avoid excessive dom size
// its implementation here is different from the one found in the
// populate-main file but they've got the same name because they basically
// do the same thing. this function , with the help of an intersection observer
// will help generating ten cards at the time and adding more cards 
// only and only if the user scrolls up to the last card

const generateCardsProgressively = function* (countriesData, regionToDisplay) {

    const main = document.querySelector('.main')
    helpers.voidNode(main)
    let countCards = 0
    let i = 0
    while (i < countriesData.length) {
        if ( countriesData[i].region === regionToDisplay) {
            const card = createCard(countriesData[i])
            card.setAttribute('data-id', i)
            main.appendChild(card)
            countCards++
        }
        
        if (countCards % 10 === 0 && countCards > 0) {
            yield countCards
        }
        i++
    }
}


const filterCountriesByRegion = function () {
    document.querySelector('.button--filter-region').click()
    const regions = document.querySelectorAll('.regions > *')
    regions.forEach(region => {
        if (region.classList.contains('active')) {
            region.classList.remove('active')
        }
    })
    const countries = JSON.parse(localStorage.getItem('data'))
    const generateMoreCards = generateCardsProgressively(countries, this.dataset.region)
    const currentLastCardIndex = generateMoreCards.next().value
    const currentLastCard = document.querySelector(`.main > .country-card:nth-child(${currentLastCardIndex}`)
    const intersectionObserverForCardAddition = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startObservation(
                        generateMoreCards,
                        intersectionObserverForCardAddition,
                        entry.target
                    )
                }
            })
        }
    )
    intersectionObserverForCardAddition.observe(currentLastCard)

    this.classList.add('active')
}


const filterCountriesByName = function () {
    const countries = JSON.parse(localStorage.getItem('data'))
    const valueToSearchFor = this.value.toLowerCase()
    if ( valueToSearchFor === '') initApp()
    else {
        const main = document.querySelector('.main')
        helpers.voidNode(main)
        countries.forEach((elememt,index) => {
            const name = elememt.translatedNames.toLowerCase()
            if (name.includes(valueToSearchFor)) {
                const card = createCard(elememt)
                card.setAttribute('data-id', index)
                main.appendChild(card)
            }
        })
    }
    
}


export const initSearchAndFiltering = function () {
    const searchInput = document.querySelector('input[type=search]')
    const regions = document.querySelectorAll('.regions > *:not(:first-child')
    const displayAllCountriesBtn = document.querySelector(
        '.regions > *:first-child'
    )
    displayAllCountriesBtn.addEventListener('click', () => {
        document.querySelector('.button--filter-region').click()
        const regions = document.querySelectorAll('.regions > *')
        regions.forEach((region) => {
            if (region.classList.contains('active')) {
                region.classList.remove('active')
            }
        })
        initApp()
        displayAllCountriesBtn.classList.add('active')
    })

    regions.forEach((region) => {
        region.addEventListener('click', filterCountriesByRegion)
    })

    searchInput.addEventListener(
        'input',
        helpers.debounce(filterCountriesByName, 500, searchInput)
    )

    const filterRegionBtn = document.querySelector('.button--filter-region')
    filterRegionBtn.addEventListener('click', function () {
        document.querySelector('.regions').classList.toggle('isclosed')
        const icon = this.querySelector('svg')
        icon.classList.toggle('rotate-180')
    })
}
