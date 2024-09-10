import {CreateProductData} from "@/interfaces/form_interfaces"

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

async function retrieveProduct(id: string) {
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

async function createProduct(data: CreateProductData) {
    return await fetch(`${ENDPOINT}/v1/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}


export { retrieveProducts, retrieveProduct, createProduct }