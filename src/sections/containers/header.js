import React, { Component } from 'react'
import { connect } from 'react-redux'

import HeaderLayout from '../components/header-layout'
 
class Header extends Component {
    render () {
        return (
            <HeaderLayout shoppingCart = { this.props.shoppingCart } navigation = { this.props.navigation } children = { this.props.children } title = { this.props.title } showShoppingCart = { this.props.showShoppingCart } />
        )
    }
}

function mapStateToProps ( state ) { return { shoppingCart: state.shoppingCartReducer } }

export default connect ( mapStateToProps ) ( Header )