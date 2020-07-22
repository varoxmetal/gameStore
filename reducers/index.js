import { combineReducers } from 'redux'

import navigation from './navigation'
import productReducer from './product-reducer'
import shoppingCartReducer from './shopping-cart-reducer'

const reducer = combineReducers ({ navigation, productReducer, shoppingCartReducer })

export default reducer;