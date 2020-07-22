import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './store'
import Loading from './src/screens/components/loading-layout'
import AppNavigatorWithState from './src/app-navigator-with-state'

type Props = {}
export default class App extends Component <Props> {
    
    constructor(properties) {
        super(properties)
    }

    render() {
        return (
            <Provider store = { store } >
                <PersistGate loading = { <Loading /> } persistor = { persistor } >
                    <AppNavigatorWithState />
                </PersistGate>
            </Provider>
        )
    }
}