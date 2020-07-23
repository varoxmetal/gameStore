import React, { Component } from 'react'
import { View  } from 'react-native'
import { Footer, Left, Body, Right, Button, Text } from 'native-base'

class FooterLayout extends Component {
    render () {
          const total = this.props.cartList.reduce((prev, cur) => prev + (parseInt(cur.price, 10) * cur.quantity), 0);
        return (
            <Footer style = { { backgroundColor: '#f4f4f4', height: 70 } }>
                <View style = { { flex: 1, flexDirection: 'row', justifyContent: 'center', margin: 10 } } >
                    <Button rounded style = { { backgroundColor: '#0098D0' } }>
                        <Text style = { { fontSize: 20, fontWeight: "bold" } } >Pay</Text>
                        <Text style = { { fontSize: 20, fontWeight: "bold" } }>$ {total.toLocaleString()}</Text>
                    </Button>
                </View>
            </Footer>
        )
    } 
}

export default FooterLayout