const initialState = {
    products: [],
}

function shoppingCartReducer ( state = initialState, action ) {
    switch( action.type ) {
        case 'ADD_PRODUCT':
            return { ...state, products:  [action.payload, ...state.products] }
            
        case 'EMPTY_CART':
            return { ...state, products: [] } 

        default : 
            return state
    }
}

export default shoppingCartReducer