import React from 'react'
import { Image } from 'react-native'
import { List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Icon } from 'native-base'

function Product ( props ) {
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
                        <Button iconRight transparent >
                            <Icon type="FontAwesome" name='cart-plus' style= { { color : '#0098D0' }}  />
                        </Button>
                </Right>
            </ListItem>
        </List>
    )
}

export default Product