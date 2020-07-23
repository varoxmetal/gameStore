import { combineReducers } from 'redux'
import navigation from './navigation'
import shoppingCartReducer from './shopping-cart-reducer'
const reducer = combineReducers ({ navigation, shoppingCartReducer })

export default reducer;