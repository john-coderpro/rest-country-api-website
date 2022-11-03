import { helpers } from './helpers'

const getHtmlTextForBorders = function (arrayOfBorders) {
    if (!arrayOfBorders) return ''
    return arrayOfBorders.reduce(
        (finalText, currentBorder) =>
            finalText.concat(
                `<button data-name=${currentBorder} class='button button--country'>${currentBorder}</button>`
            ),
        ''
    )
}
const getCountrySpokenLanguages = function (LanguagesObject) {
    return Object.values(LanguagesObject).reduce(
        (previousValue, currentValue) =>
            previousValue.concat(`, ${currentValue}`)
    )
}

const createCardFullDisplay = function (objetData) {
    const card = document.createElement('div')
    card.classList.add('country-card-full-display')
    card.innerHTML = `<button class="button button--back">
            <span>
                <svg aria-hidden="true">
    
                    <use href="#arrow-back_icon"></use>
    
                </svg>
                <span>Back</span>
            </span>
        </button>
        <div class="info-container">
            <img src="${objetData.flags.svg}" alt="${
    objetData.name.common
} flag" class="flag-full">
            <div class="infos">
                <ul>
                    <li aria-label="country name" class="country-name-text"> ${
    objetData.name.common
}</li>
                    <li>
                        <span class="country-specs-title">Native Name:</span>
                        <span>${
    Object.values(objetData.name.nativeName)[0].common
}</span>
                    </li>
                    <li>
                        <span class="country-specs-title">population:</span>
                        <span>${helpers.makeNumberLegible(
        objetData.population
    )}</span>
                    </li>
                    <li>
                        <span class="country-specs-title">Region:</span>
                        <span>${objetData.region}</span>
                    </li>
                    <li>
                        <span class="country-specs-title">Sub Region:</span>
                        <span>${objetData.subregion}</span>
                    </li>
                    <li>
                        <span class="country-specs-title">Capital:</span>
                        <span>${objetData.capital}</span>
                    </li>

                    <li class=visually-hidden>
                        <span class="country-specs-title">Top Level Domain:</span>
                        <span>${objetData.tld}</span>
                    </li>
                    <li class=visually-hidden>
                        <span class="country-specs-title">Currencies:</span>
                        <span>${
    Object.values(objetData.currencies)[0].name
}</span>
                    </li>
                    <li class=visually-hidden>
                        <span class="country-specs-title">Languages:</span>
                        <span>${getCountrySpokenLanguages(
        objetData.languages
    )}</span>
                    </li>
                </ul>
    
                <ul aria-hidden=true>
                    <li>
                        <span class="country-specs-title">Top Level Domain:</span>
                        <span>${objetData.tld}</span>
                    </li>
                    <li>
                        <span class="country-specs-title">Currencies:</span>
                        <span>${
    Object.values(objetData.currencies)[0].name
}</span>
                    </li>
                    <li>
                        <span class="country-specs-title">Languages:</span>
                        <span>${getCountrySpokenLanguages(
        objetData.languages
    )}</span>
                    </li>
                </ul>
                <div class="borders">
                    <span class="country-specs-title">Border Countries:</span>
                    ${getHtmlTextForBorders(objetData.borders)}
                </div>
            </div>
        </div>`
    document.body.appendChild(card)

    const backBtn = card.querySelector('.button--back')
    backBtn.addEventListener('click', (e) => {
        const main = document.querySelector('main')
        const filterAndSearchContainer = document.querySelector(
            '.search-and-filter-container'
        )
        document.body.removeChild(e.currentTarget.parentElement)
        if (main.classList.contains('hide')) {
            main.classList.remove('hide')
            filterAndSearchContainer.classList.remove('hide')
        }
    })

    const bordersCountriesBtns = card.querySelectorAll('.button--country')
    if (bordersCountriesBtns) {
        bordersCountriesBtns.forEach((element) => {
            element.addEventListener('click', (e) => {
                const countryName = e.target.dataset.name

                // the following regex matches the country name at the very first position

                const regex = new RegExp(`^${countryName}`, 'i')
                const countries = JSON.parse(localStorage.getItem('data'))
                backBtn.click()
                const countryToDisplayInfos = countries.find(element => regex.test(element.translatedNames))

                const main = document.querySelector('main')
                const filterAndSearchContainer = document.querySelector(
                    '.search-and-filter-container'
                )
                if (!main.classList.contains('hide')) {
                    main.classList.add('hide')
                    filterAndSearchContainer.classList.add('hide')
                }
                createCardFullDisplay(countryToDisplayInfos) 
            })
        })
    }
}

export const displayAllInformation = function () {
    const cardId = parseInt(this.dataset.id)
    const main = document.querySelector('main')
    const filterAndSearchContainer = document.querySelector(
        '.search-and-filter-container'
    )
    if (!main.classList.contains('hide')) {
        main.classList.add('hide')
        filterAndSearchContainer.classList.add('hide')
    }
    const cardInfos = JSON.parse(localStorage.getItem('data'))[cardId]
    createCardFullDisplay(cardInfos)
}
