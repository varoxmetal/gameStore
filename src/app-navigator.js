import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Loading from './screens/containers/loading'
import ProductList from './screens/containers/product-list'
import CartList from './screens/containers/cart-list'


const SwitchNavigator = createSwitchNavigator (
    {
        App: ProductList,
        Loading: Loading,
        ProductList: ProductList,
        CartList: CartList,
    },
    {
        initialRouteName: 'Loading', 
    }
)

export default createAppContainer ( SwitchNavigator )