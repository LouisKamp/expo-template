import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, Link, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'

import { Box } from '../components/atoms/Box'
import { Text } from '../components/atoms/Text'
import { DrawerParamList, RootStackParamList } from '../types/navigationTypes'

type ScreenNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<RootStackParamList, 'NotFound'>,
    CompositeNavigationProp<
        StackNavigationProp<RootStackParamList>,
        DrawerNavigationProp<DrawerParamList>
    >
>

type ScreenRouteProp = RouteProp<RootStackParamList, 'NotFound'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const NotFoundScreen: React.VFC<Props> = () => {

    return (
        <Box flex={1} backgroundColor="mainBackground" alignItems="center" justifyContent="center" padding="l">
            <Text variant="subHeader">This screen doesn&apos;t exist.</Text>
            <Box marginTop="l">
                <Link to="/counter">
                    <Text variant="link">Go back to home</Text>
                </Link>
            </Box>
        </Box>
    )
}
