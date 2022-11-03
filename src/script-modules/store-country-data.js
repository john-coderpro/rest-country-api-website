import { getAllNameTranslations } from './create-card'

const getBordersNames = function (arrayOfBordersCca3Codes, countries) {
    if (arrayOfBordersCca3Codes) 
        return countries
            .filter((country) => arrayOfBordersCca3Codes.includes(country.cca3))
            .reduce(
                (arrayOfBordersNames, currentObject) =>
                    arrayOfBordersNames.concat(currentObject.name.common),
                []
            )
    else return null
}

export const storeData = function storeCountriesData(data) {
    const dataSimplifiedForm = data.reduce((simplifiedArray, element) => {
        simplifiedArray.push({
            translatedNames: getAllNameTranslations(element.translations, element.name.common),
            name: element.name,
            area: element.area,
            tld: element.tld,
            capital: element.capital,
            flags: element.flags,
            population: element.population,
            region: element.region,
            subregion: element.subregion,
            currencies: element.currencies,
            languages: element.languages,
            borders: getBordersNames(element.borders, data),
        })
        return simplifiedArray
    }, [])
    localStorage.setItem('data', JSON.stringify(dataSimplifiedForm))
}
