import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Loading from './screens/containers/loading'
import ProductList from './screens/containers/product-list'
import ShoppingCart from './screens/containers/shopping-cart'


const SwitchNavigator = createSwitchNavigator (
    {
        App: ProductList,
        Loading: Loading,
        ProductList: ProductList,
        ShoppingCart: ShoppingCart,
    },
    {
        initialRouteName: 'Loading', 
    }
)

export default createAppContainer ( SwitchNavigator )