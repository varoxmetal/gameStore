import React, { Component } from 'react'
import { connect } from 'react-redux'

import FooterLayout from '../components/footer-layout'
 
class Footer extends Component {
    
    componentDidMount = () => {
        //console.log(this.props.shoppingCart)

        //this.props.dispatch({ type : 'REMOVE_NOTIFICATION' })
    }

    render () {
        return (
            <FooterLayout shoppingCart = { this.props.shoppingCart } navigation = { this.props.navigation } children = { this.props.children } title = { this.props.title } showShoppingCart = { this.props.showShoppingCart } />
        )
    }
}

function mapStateToProps ( state ) { return { shoppingCart: state.shoppingCartReducer.products } }

export default connect ( mapStateToProps ) ( Footer )