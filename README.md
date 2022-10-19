# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*


### Links

- [my solution code](https://github.com/john-coderpro/rest-country-api-website)
- [website live preview](https://john-coderpro.github.io/rest-country-api-website/)

## My process
I took the time to analyze the design to find similarities and to tink about how I would structure my files, my main focus points were accessibility, performance and reusability.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
  For styles
- vanilla javascript


### What I learned

I reinforced my javascript array and object methods, I also learned about the debounce function, the localStorage and also learned a lot about how to make things accessible without breaking the design


```js
const debounce = function(callbackFn, delay = 300, thisArg = null) {
        let timeout

        return (...args) => {
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => { callbackFn.apply(thisArg, args)
                
            }, delay)
        }
    }
```

```js
const storeData =  function storeCountriesData(data) {

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
```

### Continued development

I'd like to really focus more on accessebility and performance for future projects

