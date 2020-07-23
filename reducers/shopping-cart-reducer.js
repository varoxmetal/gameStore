const initialState = {
    cartList: [],
}

function shoppingCartReducer ( state = initialState, action ) {
    switch( action.type ) {

        case 'SET_PRODUCT_LIST' : {
            return { ...state, ...action.payload }
        }

        case 'ADD_PRODUCT':
            let added = false
            state.cartList.map(product => {
                if (product.id === action.payload.id) { added = true }
            })
            if (added) {
                return {
                    ...state, cartList: state.cartList.map(product => product.id === action.payload.id ? {
                        ...product, quantity: product.quantity + 1
                    } : product, ),
                }
            }
            else {
                return { ...state, cartList:  [action.payload, ...state.cartList] }
            }
            
        case 'SUB_PRODUCT':
            return { 
                ...state, cartList: state.cartList.map(product => product.id === action.payload.id ? {
                    ...product, quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                } : product, ),
            }
        
        case 'DELETE_PRODUCT':
            return {
                ...state, cartList: state.cartList.filter(item => item.id !== action.payload.id)
            }
            
        case 'EMPTY_CART':
            return { ...state, cartList: [] } 

        default : 
            return state
    }
}

export default shoppingCartReducer