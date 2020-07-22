import React, { Component } from 'react'
import { Platform, View, TouchableOpacity,  } from 'react-native'
import { Header, Left, Body, Right, Title, Subtitle, Icon, Badge, Text, Thumbnail } from 'native-base'

class HeaderLayout extends Component {
    render () {
        return (
            <Header style = { { backgroundColor: '#0098D0' } }  androidStatusBarColor="#0A74BC" >
                <Left>
                    { this.props.children ? 
                        this.props.children
                    : 
                        <Thumbnail sqare small source = { require ('../../../assets/app-logo.png' ) } style = { { resizeMode: 'contain' } } /> 
                    }
                </Left>
                <Body>
                    <Title style = { { color: '#fff' } } >Game Store</Title>
                    <Subtitle style = { { width: 300, textAlign: Platform.OS === 'ios' ? 'center' : 'left', fontSize: 10, color: '#fff' } } >{ this.props.title }</Subtitle>
                </Body>
                <Right>
                    { this.props.showShoppingCart ? 
                        <View style = { { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' } }  >
                            <TouchableOpacity onPress = { () => { this.props.navigation.navigate ( 'ShoppingCart' ) } }  hitSlop = { { top: 5, bottom: 5, left: 5, right: 5 } } >
                                <Icon type="FontAwesome" name="shopping-cart" style = { { fontSize: 24, color: '#fff', right: 14 } } />
                                { this.props.shoppingCart.hasOwnProperty('products') ? 
                                    this.props.shoppingCart.products.length > 0 ? 
                                        <Badge danger style = { { position: "absolute", justifyContent: 'center', alignItems: 'center', width: this.props.shoppingCart.products.length > 9 ? 28 : 24, height: 20, right: 3, top: -12 } } >
                                            <Text style = { { fontSize: 10, top: -3, right: 0 } } >{this.props.shoppingCart.products.length}</Text>
                                        </Badge>
                                    : 
                                        <Text></Text>
                                :
                                    <Text></Text>
                                }
                            </TouchableOpacity>
                        </View>
                    :
                        <Text></Text>
                    }
                    
                </Right>
            </Header>
        )
    } 
}

export default HeaderLayout