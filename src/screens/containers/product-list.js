import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StatusBar, View, ActivityIndicator, FlatList } from 'react-native'
import { Container } from 'native-base'

import API from '../../../utils/api'
import Header from '../../sections/containers/header'
import Empty from '../../sections/components/empty'
import Product from '../../sections/containers/product'
 
class ProductList extends Component {

    state = { loading: true }

    constructor ( props ) {
        super ( props )
    }

    static navigationOptions = () => { return { header: null } }

    async componentDidMount () {
        this.setState ( { loading: true } )
        if (this.props.productListPrice === undefined) {
            API.getProductList ( )
            .then ( ( productList ) => { 
                var productListPrice = []
                productList.map( (product) => {  
                    let price = Math.floor(Math.random() * 10000) + 25000 
                    productListPrice.push ( { ...product, price: price } ) 
                } )
                this.props.dispatch( { type: 'SET_PRODUCT_LIST', payload: { productListPrice } } )
                this.setState ( { loading: false } )
            })
        }
        else {
            this.setState ( { loading: false } )
        }
    }

    keyExtractor = item => `${item.head.toString ()}${item.tail.toString ()}`
    renderEmpty = () => <Empty text = "No se encontraron registros" />
    productPress = ( item ) => { 
        this.props.dispatch ( { type: 'ADD_PRODUCT', payload: { ...item } } )
        //this.props.dispatch({ type: 'EMPTY_CART' })
    }

    renderItem =  ( { item } ) => { 
        return (
            <Product { ...item } onPress = { () => { this.productPress ( item ) } } />  
        )
    }

    render () {
        StatusBar.setBarStyle('light-content', true)
        return (
            <Container>
                <StatusBar backgroundColor = "#0A74BC" barStyle = "light-content" /> 
                <Header title = 'Lista de productos' navigation = { this.props.navigation } showShoppingCart = { true } /> 
                <View style={{ flex: 1, margin: 10 }}>
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                    : (
                        <FlatList keyExtractor = { this.keyExtractor } data = { this.props.productListPrice } ListEmptyComponent = { this.renderEmpty } 
                            renderItem = { this.renderItem } />) 
                    }
                </View>
            </Container>
        )
    } 
}

function mapStateToProps ( state ) { return { productListPrice: state.productReducer.productListPrice, shoppingCart: state.shoppingCartReducer } }

export default connect ( mapStateToProps ) ( ProductList )