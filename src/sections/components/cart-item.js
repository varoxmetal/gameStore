import React from 'react'
import { Image } from 'react-native'
import { List, ListItem, Left, Body, Right, Text, View, Button, Icon } from 'native-base'

function CartItem ( props ) {
    return (
        <List>
            <ListItem thumbnail onPress = { props.onPress } >
                <Left>
                    <Image source = { { uri: props.image } }  style={{width: 70, height: 70, resizeMode: "contain" } } />
                </Left>
                <Body>
                    <Text style = { { fontSize: 14, paddingTop:10 } } >{ props.name }</Text>
                    <Text note style = { { fontSize: 14, paddingTop: 5 } }>{ props.amiiboSeries}</Text>
                    <Text note style = { { fontSize: 14, paddingTop:5, marginBottom: 30 } }>Type: { props.type}</Text>
                </Body>
                <Right>
                    <View style = { { flexDirection: 'row', alignItems: 'center' } } >
                        <Button rounded small style = { { marginBottom: 5, marginRight: 10, backgroundColor: '#0098D0', width: 40 } } onPress = { props.onSubPress } >
                            <Text style = { { fontWeight: 'bold', fontSize: 24 } } >-</Text>
                        </Button>
                        <Text style = { { fontSize: 16, marginBottom: 5 } } >{props.quantity}</Text>
                        <Button rounded small style = { { marginBottom: 5, marginLeft: 10, backgroundColor: '#0098D0', width: 42 } } onPress = { props.onAddPress } >
                            <Text style = { { fontWeight: 'bold', fontSize: 24 } } >+</Text>
                        </Button>
                    </View>
                    <Text style = { { fontSize: 20, marginTop: 5, marginRight: 24, marginBottom: 5 } }>$ {props.price.toLocaleString()}</Text>
                    <Icon onPress = { props.onDeleteProductPress } type="MaterialIcons" name="delete" style = { { fontSize: 24, color: '#d9534f', marginTop: 5, marginRight: 44 } } />
                </Right>
            </ListItem>
        </List>
    )
}   

export default CartItem 