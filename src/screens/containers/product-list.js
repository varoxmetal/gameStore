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
        if (this.props.productList === undefined) {
            API.getProductList ( )
            .then ( ( fetchedProductList ) => { 
                var productList = []
                fetchedProductList.map( (product) => {  
                    let id = `${product.head}${product.tail}` 
                    let price = Math.floor(Math.random() * 10000) + 25000 
                    productList.push ( { ...product, id, price: price } ) 
                } )
                this.props.dispatch( { type: 'SET_PRODUCT_LIST', payload: { productList } } )
                this.setState ( { loading: false } )
            })
        }
        else {
            this.setState ( { loading: false } )
        }
    }

    keyExtractor = item => item.id.toString ()
    renderEmpty = () => <Empty text = "No records were found" />
    productPress = ( item ) => { 
        this.props.dispatch ( { type: 'ADD_PRODUCT', payload: { ...item, quantity: 1 } } )
    }

    renderItem =  ( { item } ) => { 
        return (
            <Product { ...item } onPress = { () => { this.productPress ( item ) } } />  
        )
    }

    render () {
        console.log('render', this.props)
        StatusBar.setBarStyle('light-content', true)
        return (
            <Container>
                <StatusBar backgroundColor = "#0A74BC" barStyle = "light-content" /> 
                <Header title = 'Product list' navigation = { this.props.navigation } showShoppingCart = { true } /> 
                <View style={{ flex: 1, margin: 10 }}>
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = {{flex: 1, justifyContent: 'center', alignItems: 'center', height: 200}} />
                    : (
                        <FlatList keyExtractor = { this.keyExtractor } data = { this.props.productList } ListEmptyComponent = { this.renderEmpty } 
                            renderItem = { this.renderItem } />) 
                    }
                </View>
            </Container>
        )
    } 
}

function mapStateToProps ( state ) { return { productList: state.shoppingCartReducer.productList, cartList: state.shoppingCartReducer.cartList } }

export default connect ( mapStateToProps ) ( ProductList )