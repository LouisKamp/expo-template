import * as React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { Navigation } from '../../navigation'
import { store } from '../../state'
import { DarkModeHandler } from './DarkModeHandler'

/**
 * A FC to wrap all providers of the app
 */
export const Providers: React.FC = ({ children }) => (
    <Provider store={store}>
        <AppearanceProvider>
            <SafeAreaProvider>
                <DarkModeHandler>
                    <Navigation> 
                        {children}
                    </Navigation>
                </DarkModeHandler>
            </SafeAreaProvider>
        </AppearanceProvider>
    </Provider>
)
