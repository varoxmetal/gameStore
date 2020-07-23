import React from 'react'
import { Image } from 'react-native'
import { List, ListItem, Left, Body, Right, Text, Button, Icon } from 'native-base'

function Product ( props ) {
    return (
        <List>
            <ListItem thumbnail >
                <Left>
                    <Image source = { { uri: props.image } }  style={{width: 50, height: 50, resizeMode: "contain" } } />
                </Left>
                <Body>
                    <Text style = { { fontSize: 12 } } >{ props.name }</Text>
                    <Text note style = { { fontSize: 10 } }>{ props.amiiboSeries}</Text>
                    <Text note style = { { fontSize: 12} }>Type: { props.type}</Text>
                    <Text style = { { fontSize: 12 } }>$ {props.price.toLocaleString()}</Text>
                </Body>
                <Right>
                    <Button small rounded iconRight onPress = { props.onPress } style = { { backgroundColor: '#0098D0' } }>
                        <Text style = { { fontSize: 10 } } >Add to cart</Text>
                        <Icon type = 'MaterialIcons' name='add-shopping-cart' style = { { fontSize: 14 } }  />
                    </Button>
                </Right>
            </ListItem>
        </List>
    )
}

export default Product