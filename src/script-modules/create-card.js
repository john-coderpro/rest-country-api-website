import { helpers } from './helpers'
import { displayAllInformation} from './create-card-full-display'

const getAllNameTranslations = function(nameTranslationObject, initialName) {
    let nameWithAllTranslations = initialName

    for ( const prop in nameTranslationObject) {
        nameWithAllTranslations = nameWithAllTranslations.concat(` ${nameTranslationObject[prop]['common']}`)
    }
    return nameWithAllTranslations
}
const createCard = function createCountryCard(objetData) {
    const card = document.createElement('div')
    
    card.addEventListener('click', helpers.debounce(displayAllInformation, 100, card))
    card.classList.add('country-card')
    card.setAttribute('tabindex', '0')
    const populattion = helpers.makeNumberLegible(objetData.population)
    card.innerHTML = `
                            <img src=${objetData.flags.svg} class='flag' alt='${objetData.name.common} flag'>
                            <ul aria-label='country details'>
                                <li class=country-name-text>${objetData.name.common}</li>
                                <li>
                                    <span class=country-specs-title>population:</span>
                                    <span>${populattion}</span>
                                </li>
                                <li>
                                    <span class=country-specs-title>region:</span>
                                    <span> ${objetData.region} </span>
                                </li>
                                <li>
                                    <span class=country-specs-title>capital:</span>
                                    <span> ${objetData.capital}</span>
                                </li>
                            </ul>
                            `
    return card
}


export { 
    createCard,
    getAllNameTranslations
}
