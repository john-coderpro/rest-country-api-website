import { helpers } from './helpers'
import { createCard } from './create-card'
import {  startObservation} from './populate-main'
import { initApp } from './populate-main'

// the goal of this generator function is to avoid excessive dom size
// its implementation here is different from the one found in the
// populate-main file but they've got the same name because they basically
// do the same thing. this function , with the help of an intersection observer
// will help generating ten cards at the time and adding more cards 
// only and only if the user scrolls up to the last card

const generateCardsProgressively = function* (countriesData, regionToDisplay) {
    const searchInput = document.querySelector('input[type=search]')
    const searchInputValue = searchInput.value.toLowerCase()
    const main = document.querySelector('.main')
    helpers.voidNode(main)
    main.scroll(0,0)
    let countCards = 0
    let i = 0
    while (i < countriesData.length) {
        const countryNames = countriesData[i].translatedNames.toLowerCase()
        if ( 
            countriesData[i].region === regionToDisplay && 
            countryNames.includes(searchInputValue)
        ) 
        {
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
    if ( currentLastCardIndex) {
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
    }
    
    this.classList.add('active')
}


const filterCountriesByName = function () {
    const countries = JSON.parse(localStorage.getItem('data'))
    const valueToSearchFor = this.value.toLowerCase()
    const currentlyActiveRegion = document.querySelector('.regions > .active')
    const main = document.querySelector('.main')
    main.scroll(0,0)
    if ( valueToSearchFor === '') {
        if (currentlyActiveRegion.dataset.region === 'all') initApp()

        else {
            document.querySelector('.button--filter-region').click()
            currentlyActiveRegion.click()
        }
        
    } 
        
    else {
        const main = document.querySelector('.main')
        helpers.voidNode(main)
        main.scroll(0,0)
        countries.forEach((elememt,index) => {
            const name = elememt.translatedNames.toLowerCase()
            
            if (
                name.includes(valueToSearchFor)  && 
                currentlyActiveRegion.dataset.region === elememt.region
            )
            {
                const card = createCard(elememt)
                card.setAttribute('data-id', index)
                main.appendChild(card)
            }
            if (
                name.includes(valueToSearchFor) &&
                currentlyActiveRegion.dataset.region === 'all'
            ) {
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
    const event = new Event('input', { bubbles: false, cancelable: false })
    regions.forEach((region) => {
        region.addEventListener('click', filterCountriesByRegion)
    })

    searchInput.addEventListener(
        'input',
        helpers.debounce(filterCountriesByName, 500, searchInput)
    )
    displayAllCountriesBtn.addEventListener('click', () => {
        document.querySelector('.button--filter-region').click()
        const regions = document.querySelectorAll('.regions > *')
        regions.forEach((region) => {
            if (region.classList.contains('active')) {
                region.classList.remove('active')
            }
        })
        searchInput.dispatchEvent(event)
        displayAllCountriesBtn.classList.add('active')
    })
    const filterRegionBtn = document.querySelector('.button--filter-region')
    filterRegionBtn.addEventListener('click', function () {
        document.querySelector('.regions').classList.toggle('isclosed')
        const icon = this.querySelector('svg')
        icon.classList.toggle('rotate-180')
    })
}
