import { helpers } from './helpers'

const filterCountriesByRegion = function () {
    document.querySelector('.button--filter-region').click()
    const regions = document.querySelectorAll('.regions > *')
    regions.forEach(region => {
        if (region.classList.contains('active')) {
            region.classList.remove('active')
        }
    })
    const countries = document.querySelectorAll('.country-card')
    countries.forEach((country) => {
        if (country.dataset.region !== this.dataset.region) {
            country.classList.add('hide')
        }
        if (
            country.dataset.region === this.dataset.region &&
            country.classList.contains('hide')
        ) {
            country.classList.remove('hide')
        }
    })
    this.classList.add('active')
}


const filterCountriesByName = function () {
    const countries = document.querySelectorAll('.country-card')
    const valueToSearchFor = this.value.toLowerCase()
    countries.forEach((country) => {
        const countryName = country.dataset.name.toLowerCase()
        if (
            !countryName.includes(valueToSearchFor) &&
            !country.classList.contains('hide')
        ) {
            country.classList.add('hide')
        }
        if (
            countryName.includes(valueToSearchFor) &&
            country.classList.contains('hide')
        ) {
            country.classList.remove('hide')
        }
    })
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
        const countries = document.querySelectorAll('.country-card')
        countries.forEach((country) => {
            if (country.classList.contains('hide'))
                country.classList.remove('hide')
        })
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
