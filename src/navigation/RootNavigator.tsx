import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { NotFoundScreen } from '../screens/NotFoundScreen'
import { PushScreen } from '../screens/PushScreen'
import { RootStackParamList } from '../types/NavigationTypes'
import { DrawerNavigator } from './DrawerNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator: React.VFC = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen component={DrawerNavigator} name="Root" />

                <Stack.Screen component={PushScreen} name="Push" />

                <Stack.Screen component={NotFoundScreen} name="NotFound" options={{ title: 'Oops!' }} />
            </Stack.Group>
        </Stack.Navigator>
    )
}
