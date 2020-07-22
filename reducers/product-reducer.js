function productReducer ( state = {}, action ) {
    switch( action.type ) {
        
        case 'SET_PRODUCT_LIST' : {
            return { ...state, ...action.payload }
        }

        default : 
            return state
    }
}

export default productReducer