import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { Navigation, RootNavigator } from '../../navigation'
import { store } from '../../state'
import { DarkModeHandler } from './DarkModeHandler'

export const Providers: React.FC = () => (
    <Provider store={store}>
        <AppearanceProvider>
            <SafeAreaProvider>
                <DarkModeHandler>
                    <Navigation> 
                        <RootNavigator />
                    </Navigation>
                </DarkModeHandler>
                <StatusBar />
            </SafeAreaProvider>
        </AppearanceProvider>
    </Provider>
)
