import React, { Component } from 'react'
import { BackHandler, FlatList, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Container, ListItem, Text } from 'native-base'

import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import Empty from '../../sections/components/empty'
import CartItem from '../../sections/components/cart-item'
import Footer from '../../sections/containers/footer'

class ShoppingCart extends Component {

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null, } }

    async componentDidMount () {
        this.setState ( { loading: false } )
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }

    handleBackButtonClick = () => {
        return this.props.dispatch( NavigationActions.navigate({ routeName: 'ProductList' }) )
    }
    
    handleHeaderBackButtonClick = () => {
        return this.props.dispatch( NavigationActions.navigate({ routeName: 'ProductList' }) )
    }
    
    keyExtractor = item => `${item.head.toString ()}${item.tail.toString ()}` 
    renderEmpty = () => <Empty text = "No se encontraron registros" />

    renderItem = ( { item } ) => { 
        return(
            <CartItem {...item } />
        ) 
    }

    render () {
        return (
            <Container>
                <Header title = 'Carrito de compras' navigation = { this.props.navigation } showShoppingCart = { false } >
                    <HeaderBackButton onPress = { this.handleHeaderBackButtonClick } />
                </Header>
                <View style={{ flex: 1 }}>
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = { { flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 } } />
                    : 
                        (<View>
                            <ListItem itemDivider>
                                <Text>Articulos en el carrito</Text>
                            </ListItem>
                            <FlatList keyExtractor = { this.keyExtractor } data = { this.props.shoppingCart } ListEmptyComponent = { this.renderEmpty } 
                                renderItem = { this.renderItem } />
                            
                        </View>) 
                    } 
                </View>
                <Footer/>
            </Container>
        )
    } 
}

function mapStateToProps ( state ) { return { shoppingCart : state.shoppingCartReducer.products } }

export default connect ( mapStateToProps ) ( ShoppingCart )