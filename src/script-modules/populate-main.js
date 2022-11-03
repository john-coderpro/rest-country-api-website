import { fetchData } from './fetch-data'
import { createCard } from './create-card'
import { storeData } from './store-country-data'
import { helpers } from './helpers'


const generateCardsProgressively = function* (
    countriesData,
    startingIndex = 0
) {
    const main = document.querySelector('.main')
    let i = startingIndex
    while (i < countriesData.length) {
        const card = createCard(countriesData[i])
        card.setAttribute('data-id', i)
        main.appendChild(card)
        if (i % 10 === 0 && i > 0) {
            yield i
        }
        i++
    }
}
const startObservation = function(generatorObject, observer, nodeToUnobserve) {
    const currentLastCardIndex = generatorObject.next().value
    if (currentLastCardIndex) {
        const currentLastCard = document.querySelector(
            `.country-card:nth-child(${currentLastCardIndex})`
        )
        observer.observe(currentLastCard)
    }
    observer.unobserve(nodeToUnobserve)
}

// the data fetched in this function are stored in the localStorage
// in order to save users' internet data 
// because extra trips to the server beyond the first one will be avoided.
// in all other tasks neccessiting the data , they will be retrieved from the
// local storage. the id here is to facilate 
// the retrieval in the array stored 
// in the local storage since the id of each card will be its index in the 
// array. it will help to avoid looping trough the array 
// to get the correct data to display when the user click on a card. 
// it's worth noting that the order
// in which the function is structured is really important for that to 
// behave properly, otherwise, the click on a card will cause to display
// incorrect data, that is the data of another country
// plus, the choice has been made to request countries' data by region
// rather than all at once to increase performance

const initApp = async function() {

    let generateMoreCards, 
        intersectionObserverForCardAddition
    
    if (localStorage.getItem('data')===null) {

        intersectionObserverForCardAddition = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
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
        const main = document.querySelector('.main')
        helpers.voidNode(main)
        const oceaniaData = await fetchData(
            'https://restcountries.com/v3.1/region/oceania'
        )
        oceaniaData.forEach((element, index) => {
            const card = createCard(element)
            card.dataset.id = index
            main.appendChild(card) 
            if( index === 26)
                intersectionObserverForCardAddition.observe(card)
                
        })
        const africaData = await fetchData(
            'https://restcountries.com/v3.1/region/africa'
        )
        const europeData = await fetchData(
            'https://restcountries.com/v3.1/region/europe'
        )
            
        const asiaData = await fetchData(
            'https://restcountries.com/v3.1/region/asia'
        )
            
        const americaData = await fetchData(
            'https://restcountries.com/v3.1/region/americas'
        )
        const data = []
        oceaniaData.forEach(element =>  data.push(element))

        africaData.forEach(element => data.push(element))

        europeData.forEach(element => data.push(element))

        asiaData.forEach(element => data.push(element))

        americaData.forEach(element =>  data.push(element))

        storeData(data)

        generateMoreCards = generateCardsProgressively(
            JSON.parse(localStorage.getItem('data')), 27
        )
        
    }  else {
        const main = document.querySelector('.main')
        helpers.voidNode(main)
        generateMoreCards = generateCardsProgressively(
            JSON.parse(localStorage.getItem('data'))
        )
        intersectionObserverForCardAddition =
                new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                startObservation(generateMoreCards, intersectionObserverForCardAddition, entry.target)
                            }
                        })
                    }
                )
        const currentLastCardIndex = generateMoreCards.next().value
        const currentLastCard = document.querySelector(
            `.country-card:nth-child(${currentLastCardIndex}`
        )
        intersectionObserverForCardAddition.observe(currentLastCard)
    }
} 


const populateMain = function() {
    window.addEventListener('DOMContentLoaded', initApp)
}

export {
    populateMain,
    startObservation,
}