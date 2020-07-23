import React, { Component } from 'react'
import LoadingLayout from '../components/loading-layout'

class Loading extends Component {

    constructor(properties) {
        super(properties)
    }
  
    componentDidMount = () => {
        this.props.navigation.navigate ( 'ProductList' )
    }

    render () {
        return (
            <LoadingLayout />
        )   
    }
}



export default Loading