import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { Text } from '../components/atoms/Text'
import { DrawerParamList, RootStackParamList } from '../types/navigationTypes'

type ScreenNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<RootStackParamList, 'Push'>,
    CompositeNavigationProp<
        StackNavigationProp<RootStackParamList>,
        DrawerNavigationProp<DrawerParamList>
    >
>

type ScreenRouteProp = RouteProp<RootStackParamList, 'Push'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const PushScreen: React.FC<Props> = ({ route }) => {
    return (
        <Container>
            <Text variant="subHeader">Push Screen</Text>
            <Box marginTop="m">
                <Text>{route.params.count}</Text>
            </Box>
        </Container>
    )
}
