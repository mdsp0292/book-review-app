const ENDPOINT = process.env.REACT_APP_API_URL

async function retrieveProducts() {
    try {
        const response = await fetch(`${ENDPOINT}/v1/products`)
        return await response.json()
    } catch (error) {
        console.log("Unable to retrieve products " + JSON.stringify(error))
        return []
    }
}

async function retrieveProduct(id) {
    try {
        const response = await fetch(`${ENDPOINT}/products/${id}`)
        return await response.json()
    } catch (error) {
        return [{
            'error': `Unable to retrieve product id ${id}`,
            'more': JSON.stringify(error)
        }]
    }
}


export { retrieveProducts, retrieveProduct }