const getBordersNames = function (arrayOfBordersCca3Codes, countries) {
    if (arrayOfBordersCca3Codes) {
        const borders = countries.filter(country => 
            arrayOfBordersCca3Codes.includes(country.cca3)
        )
        return  borders.reduce((arrayOfBordersNames, currentObject) => {
            arrayOfBordersNames.push(currentObject.name.common)
            return arrayOfBordersNames
        }, [])
    } else {
        return null
    }
    
}

export const storeData =  function storeCountriesData(data) {

    const dataSimplifiedForm = data.reduce((simplifiedArray, element) => {
        simplifiedArray.push({
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
    sessionStorage.setItem('data', JSON.stringify(dataSimplifiedForm))
}
