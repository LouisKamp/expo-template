import { createDrawerNavigator } from '@react-navigation/drawer'
import * as React from 'react'

import { useIsLarge } from '../hooks/useIsLarge'
import { CounterScreen } from '../screens/CounterScreen'
import { FormScreen } from '../screens/FormScreen'
import { DrawerParamList } from '../types/navigationTypes'

const Drawer = createDrawerNavigator<DrawerParamList>()

export const DrawerNavigator = () => {

    const isLarge = useIsLarge()

    return (
        <Drawer.Navigator
            initialRouteName="Counter"
            drawerType={isLarge ? 'permanent' : 'front'}
            drawerStyle={isLarge ? null : { width: '100%' }}>
            <Drawer.Screen
                name="Counter"
                component={CounterScreen}/>
            <Drawer.Screen name="Form" component={FormScreen} />
        </Drawer.Navigator>
    )
}
