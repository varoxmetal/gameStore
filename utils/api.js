const BASE_API_URL = 'https://www.amiiboapi.com/'
const BASE_PATH_URL = 'api/'

class Api {
    //Product list
    //Get product list
    async getProductList ( ) {
        const PATH = 'amiibo/'
        const result = await fetch( `${ BASE_API_URL }${ BASE_PATH_URL }${ PATH }`, {
            method: 'GET',
        })
        .then( async ( query ) =>  await query.json ( ) )
        .catch ( error => console.log ( 'error', error ) )
        return result.amiibo
    }
}

export default new Api()     