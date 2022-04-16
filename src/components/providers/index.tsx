import * as React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
    RecoilRoot,
} from 'recoil'

import { NavigationProvider } from '../../navigation/NavigationProvider'
import { QueryProvider } from './QueryProvider'
import { ThemeProvider } from './ThemeProvider'
  
/**
 * A FC to wrap all providers of the app
 */
export const Providers: React.FC = ({ children }) => (
    <QueryProvider>
        <RecoilRoot>
            <AppearanceProvider>
                <SafeAreaProvider>
                    <ThemeProvider>
                        <NavigationProvider> 
                            {children}
                        </NavigationProvider>
                    </ThemeProvider>
                </SafeAreaProvider>
            </AppearanceProvider>
        </RecoilRoot>
    </QueryProvider>
)

export const TestProviders: React.FC = ({ children }) => (
    <QueryProvider>
        <RecoilRoot>
            <SafeAreaProvider initialSafeAreaInsets={{
                top: 1, left: 2, right: 3, bottom: 4 
            }}
            >
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </SafeAreaProvider>
        </RecoilRoot>
    </QueryProvider>
)
