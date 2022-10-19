export const helpers = {

    makeNumberLegible(num) {
        const numCopy = num.toString()
        const numLength = numCopy.split('').length
        const indexStart = numLength%3
        let result
        
        result = numCopy.substring(0, indexStart)
        
        let i = indexStart
        while( i < numLength) {
            if ( result === '') {
                result = result.concat(`${numCopy.substring(i, i+3)}`)
            } else {
                result = result.concat(`,${numCopy.substring(i, i+3)}`)
            }
            i += 3
        }
        return result
    },
    debounce(callbackFn, delay = 300, thisArg = null) {
        let timeout

        return (...args) => {
            if (timeout) {
                clearTimeout(timeout)
            }
            timeout = setTimeout(() => { callbackFn.apply(thisArg, args)
                
            }, delay)
        }
    }
}