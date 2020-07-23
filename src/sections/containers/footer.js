import React, { Component } from 'react'
import { connect } from 'react-redux'

import FooterLayout from '../components/footer-layout'
 
class Footer extends Component {
    render () {
        return (
            <FooterLayout cartList = { this.props.cartList } />
        )
    }
}

function mapStateToProps ( state ) { return { cartList: state.shoppingCartReducer.cartList } }

export default connect ( mapStateToProps ) ( Footer )