import { Ionicons } from '@expo/vector-icons'
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import * as React from 'react'
import { useEffect } from 'react'

/**
 * Loads resources from assets
 */
export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false)

    // Load any resources or data that we need prior to rendering the app

    useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync()

                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf'),
                })
            } catch (e) {
                // eslint-disable-next-line no-console
                console.warn(e)
            } finally {
                setLoadingComplete(true)
                SplashScreen.hideAsync()
            }
        }
        loadResourcesAndDataAsync()
    }, [])

    return isLoadingComplete
}
