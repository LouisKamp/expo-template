import React from 'react'

import { Providers } from './src/components/utils/Providers'
import useCachedResources from './src/hooks/useCachedResources'
import { RootNavigator } from './src/navigation'

const App = () => {

    const isLoadingComplete = useCachedResources()

    if (!isLoadingComplete) {
        return null
    } else {
        return (
            <Providers>
                <RootNavigator />
            </Providers>
        )
    }
}

export default App
