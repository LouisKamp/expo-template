import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'

import { useIsLarge } from '../hooks/useIsLarge'
import { AnimationScreen } from '../screens/Drawer/AnimationScreen/AnimationScreen'
import { CounterScreen } from '../screens/Drawer/CouterScreen/CounterScreen'
import { FormScreen } from '../screens/Drawer/FormScreen/FormScreen'
import { DrawerParamList } from '../types/NavigationTypes'

const Drawer = createDrawerNavigator<DrawerParamList>()

export const DrawerNavigator = () => {

    const isLarge = useIsLarge()

    return (
        <Drawer.Navigator
            initialRouteName="Animation"
            screenOptions={{
                drawerType: isLarge ? 'permanent' : 'front',
                drawerStyle: isLarge ? null : { width: '100%' },
                headerShown: false
            }}
        >
            <Drawer.Screen
                component={CounterScreen}
                name="Counter"
            />

            <Drawer.Screen component={FormScreen} name="Form" />

            <Drawer.Screen component={AnimationScreen} name="Animation" />
        </Drawer.Navigator>
    )
}
