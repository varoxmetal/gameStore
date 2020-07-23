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
                            <TouchableOpacity onPress = { () => { this.props.navigation.navigate ( 'CartList' ) } }  hitSlop = { { top: 5, bottom: 5, left: 5, right: 5 } } > 
                                <Icon type="MaterialIcons" name="shopping-cart" style = { { fontSize: 24, color: '#fff', right: 14 } } />
                                { this.props.hasOwnProperty('cartList') ? 
                                    this.props.cartList.length > 0 ?
                                        <Badge danger style = { { position: 'absolute', width: this.props.cartList.reduce((prev, cur) => prev + parseInt(cur.quantity, 10), 0) > 9 ? 28 : 22, height: 12 } } >
                                            <Text style = { { fontSize: 10 } } >{this.props.cartList.reduce((prev, cur) => prev + parseInt(cur.quantity, 10), 0)}</Text>
                                        </Badge>
                                    : 
                                        <View></View>
                                :
                                    <View></View>
                                }
                            </TouchableOpacity>
                        </View>
                    :
                        <View></View>
                    }
                </Right>
            </Header>
        )
    } 
}

export default HeaderLayout