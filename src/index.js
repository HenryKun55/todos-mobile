import React from 'react'

import { YellowBox, View } from 'react-native'

YellowBox.ignoreWarnings(['Warning: ReactNative.createElement'])

import Routes from './routes'

const App = () => (       
    <Routes />
)

export default App