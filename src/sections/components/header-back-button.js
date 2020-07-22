import React from 'react'
import { Button, Icon } from 'native-base'

function HeaderBackButton ( props ) {
    return (
        <Button onPress = { props.onPress } transparent><Icon type="FontAwesome" name = "arrow-left" style = { { color: '#fff' } } /></Button>
    )
}

export default HeaderBackButton