import React from 'react'
import { Image } from 'react-native'
import { List, ListItem, Left, Body, Right, Text } from 'native-base'

function CartItem ( props ) {
    return (
        <List>
            <ListItem thumbnail onPress = { props.onPress } >
                <Left>
                    <Image source = { { uri: props.image } }  style={{width: 50, height: 50, resizeMode: "contain" } } />
                </Left>
                <Body>
                    <Text style = { { fontSize: 12 } } >{ props.name }</Text>
                    <Text note style = { { fontSize: 10 } }>{ props.amiiboSeries}</Text>
                    <Text note style = { { fontSize: 12} }>Tipo: { props.type}</Text>
                    <Text style = { { fontSize: 12 } }>$ {props.price.toLocaleString()}</Text>
                </Body>
                <Right>
                    <Text style = { { fontSize: 12 } } >+</Text>
                    <Text style = { { fontSize: 12 } } >1</Text>
                    <Text style = { { fontSize: 12 } } >-</Text>
                </Right>
            </ListItem>
        </List>
    )
}   

export default CartItem 