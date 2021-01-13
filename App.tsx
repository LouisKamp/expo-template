import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { DarkModeHandler } from './src/components/organism/DarkModeHandler'
import useCachedResources from './src/hooks/useCachedResources'
import { Navigation } from './src/navigation'
import { store } from './src/state'

const App = () => {
    const isLoadingComplete = useCachedResources()

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <Provider store={store}>
                <AppearanceProvider>
                    <SafeAreaProvider>
                        <DarkModeHandler>
                            <Navigation />
                        </DarkModeHandler>
                        <StatusBar />
                    </SafeAreaProvider>
                </AppearanceProvider>
            </Provider>
        )
    }
}

export default App
