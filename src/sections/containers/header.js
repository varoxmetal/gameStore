import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderLayout from '../components/header-layout'
 
class Header extends Component {
    render () {
        return (
            <HeaderLayout cartList = { this.props.cartList } navigation = { this.props.navigation } children = { this.props.children } title = { this.props.title } showShoppingCart = { this.props.showShoppingCart } />
        )
    }
}

function mapStateToProps ( state ) { return { cartList: state.shoppingCartReducer.cartList } }

export default connect ( mapStateToProps ) ( Header )