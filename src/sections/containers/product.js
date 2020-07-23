import React, { Component } from 'react'
import ProductLayout from '../components/product-layout'
 
class Product extends Component {
    render () {
        return (
            <ProductLayout { ...this.props } onPress = { this.props.onPress } />
        )
    }
}

export default Product 