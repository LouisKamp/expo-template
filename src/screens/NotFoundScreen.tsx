import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, Link, RouteProp } from '@react-navigation/native'
import * as React from 'react'

import { Box } from '../components/atoms/Box'
import { Text } from '../components/atoms/Text'
import { CompositeNavType, RootStackParamList } from '../types/NavigationTypes'

type ParamList = RootStackParamList

type ScreenNavigationProp = CompositeNavigationProp<
DrawerNavigationProp<ParamList, 'NotFound'>,
CompositeNavType
>

type ScreenRouteProp = RouteProp<ParamList, 'NotFound'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const NotFoundScreen: React.VFC<Props> = () => {

    return (
        <Box alignItems="center" backgroundColor="mainBackground" flex={1} justifyContent="center" padding="l">
            <Text variant="subHeader">This screen doesn&apos;t exist.</Text>

            <Box marginTop="l">
                <Link to="/counter">
                    <Text variant="link">Go back to home</Text>
                </Link>
            </Box>
        </Box>
    )
}
