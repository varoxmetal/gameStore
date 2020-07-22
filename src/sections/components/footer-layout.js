import React, { Component } from 'react'
import { Platform, StatusBar, View, TouchableOpacity,  } from 'react-native'
import { Footer, Left, Body, Right, Button, Subtitle, Thumbnail, Icon, Badge, Text } from 'native-base'

class FooterLayout extends Component {
    render () {
        console.log(this.props)
          const total = this.props.shoppingCart.reduce((prev, cur) => prev + parseInt(cur.price, 10), 0);
          
          console.log('Total Messages:', total);
        return (
            <Footer>
                <View style = {{ flex: 1, flexDirection: "row", padding: 14 }}>
                    <Left></Left>
                    <Body><Button success><Text> Comprar </Text></Button></Body>
                    <Right><Text>Total</Text><Text>{total.toLocaleString()}</Text></Right>
                </View>
            </Footer>
        )
    } 
}

export default FooterLayout