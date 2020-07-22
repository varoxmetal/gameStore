import React, { Component } from 'react'
import LoadingLayout from '../components/loading-layout'

class Loading extends Component {

    constructor(properties) {
        super(properties)
    }
  
    componentDidMount = () => {
        setTimeout(() => {this.props.navigation.navigate ( 'ProductList' )}, 2000)
        
    }

    render () {
        return (
            <LoadingLayout />
        )   
    }
}



export default Loading