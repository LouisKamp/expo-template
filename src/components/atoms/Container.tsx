import * as React from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Container: React.FC = ({ children }) => {
    const { 
        top, bottom, right, left 
    } = useSafeAreaInsets()

    return (
        <View style={{
            paddingTop: top || 24, 
            paddingBottom: bottom,
            paddingRight: right || 24,
            paddingLeft: left || 24 
        }}>{children}
        </View>
    )
}
