export const fetchData = async function getDataInJson(url) {
    const response = await fetch(url)
    const data = await response.json()
    return data
}