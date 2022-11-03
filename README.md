# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Acknowledgments](#acknowledgments)


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
I took the time to analyze the design to find similarities and to think about how I would structure my files, my main focus points were accessibility, performance and reusability.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
  For styles
- javascript
- webpack


### What I learned

I reinforced my javascript array and object methods, I also learned about the debounce function, the localStorage and also learned a lot about how to make things accessible without breaking the design

below is some code I'm proud of

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

### Continued development

I'd like to really focus more on accessebility and performance for future projects

