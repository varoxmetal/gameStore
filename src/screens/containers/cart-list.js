import React, { Component } from 'react'
import { BackHandler, FlatList, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Container, ListItem, Text, Left, Right, Icon, Button } from 'native-base'

import Header  from '../../sections/containers/header'
import HeaderBackButton from '../../sections/components/header-back-button'
import Empty from '../../sections/components/empty'
import CartItem from '../../sections/components/cart-item'
import Footer from '../../sections/containers/footer'

class CartList extends Component {

    state = { loading: true }

    constructor ( props ) {
        super ( props )
        this.handleBackButtonClick = this.handleBackButtonClick.bind ( this )
    }

    static navigationOptions = () => { return { header: null, } }

    async componentDidMount () {
        this.setState ( { loading: false } )
        BackHandler.addEventListener ( 'hardwareBackPress', this.handleBackButtonClick )
    }

    componentWillUnmount () {
        BackHandler.removeEventListener ( 'hardwareBackPress', this.handleBackButtonClick ) 
    }

    handleBackButtonClick = () => {
        return this.props.dispatch( NavigationActions.navigate({ routeName: 'ProductList' }) )
    }
    
    keyExtractor = item => item.id.toString () 
    renderEmpty = () => <Empty text = "No records were found" />
    renderItem = ( { item } ) => { 
        return(
            <CartItem {...item } 
                onAddPress = { () => { this.handleAddPress ( item ) } } 
                onSubPress = { () => { this.handleSubPress ( item ) } }
                onDeleteProductPress = { () => { this.handleDeleteProductPress ( item ) } } 
            />
        ) 
    }

    emptyCartPress = () => {
        this.props.dispatch ( { type: 'EMPTY_CART' } )
    }

    handleAddPress = ( item ) => {
        this.props.dispatch ( { type: 'ADD_PRODUCT', payload: { ...item  } } )
    }

    handleSubPress = ( item ) => {
        this.props.dispatch ( { type: 'SUB_PRODUCT', payload: { ...item } } )
    }

    handleDeleteProductPress = ( item ) => {
        this.props.dispatch ( { type: 'DELETE_PRODUCT', payload: { ...item } } )
    }

    render () {
        console.log(this.props)
        return (
            <Container>
                <Header title = 'Shopping cart' navigation = { this.props.navigation } showShoppingCart = { false } >
                    <HeaderBackButton onPress = { this.handleBackButtonClick } />
                </Header>
                <View style={{ flex: 1 }}>
                    { this.state.loading ? 
                        <ActivityIndicator color = "#0098D0" size = "large" style = { { flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 } } />
                    : 
                        (<View style = { { marginBottom: 60 } } > 
                            <ListItem itemDivider>
                                <Left>
                                    <Text>Order items</Text>
                                </Left>
                                <Right>
                                    <Button iconRigt small rounded onPress = { this.emptyCartPress } style = { { backgroundColor: '#d9534f', width: 130 } } >
                                        <Text style = { { fontSize: 10 } } >Empty cart</Text>
                                        <Icon type="MaterialIcons" name="remove-shopping-cart" style = { { fontSize: 18 } } />
                                    </Button>
                                </Right>
                            </ListItem>
                            <FlatList keyExtractor = { this.keyExtractor } data = { this.props.cartList } ListEmptyComponent = { this.renderEmpty } 
                                renderItem = { this.renderItem } />
                        </View>) 
                    } 
                </View>
                <Footer/>
            </Container>
        )
    } 
}

function mapStateToProps ( state ) { return { cartList : state.shoppingCartReducer.cartList } }

export default connect ( mapStateToProps ) ( CartList )