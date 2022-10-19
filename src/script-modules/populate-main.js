import { fetchData } from './fetch-data'
import { createCard } from './create-card'
import { storeData } from './store-country-data'

// the data fetch in this function are stored in the sessionStorage
// in order to save users' internet data 
// because extra trips to the server beyond the first one will be avoided.
// in all other tasks neccessiting the data , they will be retrieved from the
// session storage. the id here is to facilate 
// the retrieval in the array stored 
// in the session storage since the id of each card will be its index in the 
// array. it will help to avoid looping trough the array 
// to get the correct data to display when the user click on a card. 
// it's worth noting that the order
// in which the function is structured is really important for that to 
// behave properly, otherwise, the click on a card will cause to display
// incorrect data, that's is the data of another country

export const populateMain = async function populateMainWithCountries() {
    let cardId = 0
    const main = document.querySelector('.main')
    const oceaniaData = await fetchData(
        'https://restcountries.com/v3.1/region/oceania'
    )
    oceaniaData.forEach((element) => {
        const card = createCard(element)
        card.setAttribute('data-id', cardId)
        cardId++
        main.appendChild(card)
    })
    const africaData = await fetchData(
        'https://restcountries.com/v3.1/region/africa'
    )
    africaData.forEach((element) => {
        const card = createCard(element)
        card.setAttribute('data-id', cardId)
        cardId++
        main.appendChild(card)
    })
    const europeData = await fetchData(
        'https://restcountries.com/v3.1/region/europe'
    )
    europeData.forEach((element) => {
        const card = createCard(element)
        card.setAttribute('data-id', cardId)
        cardId++
        main.appendChild(card)
    })
    const asiaData = await fetchData(
        'https://restcountries.com/v3.1/region/asia'
    )
    asiaData.forEach((element) => {
        const card = createCard(element)
        card.setAttribute('data-id', cardId)
        cardId++
        main.appendChild(card)
    })
    const americaData = await fetchData(
        'https://restcountries.com/v3.1/region/americas'
    )
    americaData.forEach((element) => {
        const card = createCard(element)
        card.setAttribute('data-id', cardId)
        cardId++
        main.appendChild(card)
    }) 
    const data = []
    oceaniaData.forEach(element => {
        data.push(element)
    })
    africaData.forEach((element) => {
        data.push(element)
    })
    europeData.forEach((element) => {
        data.push(element)
    })
    asiaData.forEach((element) => {
        data.push(element)
    })
    americaData.forEach((element) => {
        data.push(element)
    })
    console.log(data)
    storeData(data)
}
