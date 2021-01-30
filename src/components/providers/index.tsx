import * as React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import { NavigationProvider } from '../../navigation/NavigationProvider'
import { store } from '../../state'
import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from './ThemeProvider'

/**
 * A FC to wrap all providers of the app
 */
export const Providers: React.FC = ({ children }) => (
    <QueryProvider>
        <Provider store={store}>
            <AppearanceProvider>
                <SafeAreaProvider>
                    <ThemeProvider>
                        <NavigationProvider> 
                            {children}
                        </NavigationProvider>
                    </ThemeProvider>
                </SafeAreaProvider>
            </AppearanceProvider>
        </Provider>
    </QueryProvider>
)
