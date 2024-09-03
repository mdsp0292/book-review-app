const ENDPOINT = process.env.ENDPOINT || 'https://demo4690370.mockable.io'

async function retrieveProducts() {
    try {
        return productsSample
        // const response = await fetch(`${ENDPOINT}/products`)
        // return await response.json()
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

const productsSample = [
    {
        'id': 111,
        'title': 'John Legend Live',
        'description': 'Come and join one of the world\'s most beloved artists as he performs live and just for you from MelodyVR’s studio in LA.',
        'image': 'https://ia601601.us.archive.org/view_archive.php?archive=/25/items/m_covers_0014/m_covers_0014_63.zip&file=0014638562-M.jpg',
        'accentColor': '#f52459',
        'backgroundColor': '#841225',
        'textColor': '#ffffff'
    },
    {
        'id': 114,
        'title': 'Fontaines D.C. in London',
        'description': 'Live show from Brixton Academy.',
        'image': 'https://d17jafawxl91z1.cloudfront.net/MVR_JOL_L0022_App_Hero-1589529179871.jpg',
        'accentColor': '#8a8989',
        'backgroundColor': '#424242',
        'textColor': '#FFCCCC',
    },
    {
        'id': 115,
        'title': 'Burna Boy UK Tour',
        'description': 'Burna Boy live in the Apollo Theatre for the first time in the UK.',
        'artist': 'Burna Boy',
        'isFree': false,
        'image': 'https://d17jafawxl91z1.cloudfront.net/MVR_BNB_L0102_App_Hero-1606999927551.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_BNB_L0102_App_Square-1606999927551.jpg',
        'accentColor': '#00b6b8',
        'backgroundColor': '#F2F2F2',
        'textColor': '#08070b',
        'feature_order': '7',
        'price': '9.99'
    },
    {
        'id': 118,
        'title': 'Lady Leshurr',
        'description': 'Get ready for royalty. The impossibly skilled artist behind the iconic \'Queens Speech\' freestyles shows us how she became a viral phenomenon, with a flawless display of personality-filled, inventive rap.',
        'artist': 'Lady Leshurr',
        'isFree': false,
        'image': 'https://d17jafawxl91z1.cloudfront.net/MVR_LAL_P0299_App_Hero-1595603595282.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_LAL_P0299_App_Square-1595603595282.jpg',
        'accentColor': '#e31718',
        'backgroundColor': '#1f0809',
        'textColor': '#ffffff',
        'feature_order': '8',
        'price': '12.99'
    },
    {
        'id': 121,
        'title': 'Ramz',
        'description': 'Get front and centre at Wireless Connect with Ramz, the Brit Award-nominated London singer-songwriter and rapper behind the hit single \'Barking\'.',
        'artist': 'Ramz',
        'isFree': true,
        'image': 'https://d17jafawxl91z1.cloudfront.net/MVR_RAM_P0295_App_Hero__01-1595262686134.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_RAM_P0295_App_Square-1595263538889.jpg',
        'accentColor': '#a3ad70',
        'backgroundColor': '#0d0a10',
        'textColor': '#ffffff',
        'feature_order': '1'
    },
    {
        'id': 112,
        'title': 'Disturbing London',
        'description': 'Join Disturbing London live from Brixton Academy next Saturday.',
        'artist': 'Disturbing London',
        'isFree': true,
        'image': 'https://d17jafawxl91z1.cloudfront.net/MVR_DLP_P0333_App_Hero-1597662543335.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_DLP_P0333_App_Square-1597662543335.jpg',
        'accentColor': '#377b35',
        'backgroundColor': '#261e1c',
        'textColor': '#ffffff',
        'feature_order': '6'
    },
    {
        'id': 125,
        'title': 'Machine Gun Kelly',
        'description': 'Live from LA.',
        'artist': 'Machine Gun Kelly',
        'isFree': false,
        'image': 'https://d17jafawxl91z1.cloudfront.net/MVR_MGK_P0252_App_Hero-1588081917889.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_MGK_P0252_App_Square-1588081917889.jpg',
        'accentColor': '#ef3f3a',
        'backgroundColor': '#131a1d',
        'textColor': '#ffffff',
        'feature_order': '5'
    },
    {
        'id': 126,
        'title': 'Machine Gun Kelly',
        'description': 'Live from LA.',
        'artist': 'Machine Gun Kelly',
        'isFree': false,
        'image': 'https://d17jafawxl91z1.cloudfront.net/MVR_MGK_P0252_App_Hero-1588081917889.jpg',
        'image2': 'https://d17jafawxl91z1.cloudfront.net/MVR_MGK_P0252_App_Square-1588081917889.jpg',
        'accentColor': '#ef3f3a',
        'backgroundColor': '#131a1d',
        'textColor': '#ffffff',
        'feature_order': '5'
    }
]

export { retrieveProducts, retrieveProduct }