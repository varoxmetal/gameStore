import React, { Component } from 'react'

import API from '../../../utils/api'
import ProductLayout from '../components/product-layout'
 
class Product extends Component {

    /*state = { studentImage: '' }

    async componentDidMount () {
        await API.getAuth()
        .then( ( auth ) => {
            API.getStudentImageBystudent ( auth, this.props.fafo_cod_clave )
            .then( ( studentImage ) => {
                this.setState ( { studentImage: studentImage } )
             })
        } )
    }*/

    render () {
        return (
            <ProductLayout { ...this.props } onPress = { this.props.onPress } /> //studentImage = { this.state.studentImage } />
        )
    }
}

export default Product 