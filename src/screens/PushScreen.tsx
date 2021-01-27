import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { Text } from '../components/atoms/Text'
import { CompositeNavType, RootStackParamList } from '../types/navigationTypes'

type ParamList = RootStackParamList

type ScreenNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<ParamList, 'Push'>,
    CompositeNavType
>

type ScreenRouteProp = RouteProp<ParamList, 'Push'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const PushScreen: React.VFC<Props> = ({ route }) => {
    return (
        <Container>
            <Text variant="subHeader">Push Screen</Text>
            <Box marginTop="m">
                <Text>{route.params.count}</Text>
            </Box>
        </Container>
    )
}
