import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { NotFoundScreen } from '../screens/NotFoundScreen'
import { PushScreen } from '../screens/PushScreen'
import { RootStackParamList } from '../types/navigationTypes'
import { DrawerNavigator } from './DrawerNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator:React.VFC = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Root" component={DrawerNavigator} />
                <Stack.Screen name="Push" component={PushScreen} />
                <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
            </Stack.Group>
        </Stack.Navigator>
    )
}
