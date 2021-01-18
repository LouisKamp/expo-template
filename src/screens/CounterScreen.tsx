import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { Text } from '../components/atoms/Text'
import { CountButton } from '../components/molecule/CountButton'
import { DisplayCount } from '../components/molecule/DisplayCount'
import { RootState } from '../state'
import { DrawerParamList, RootStackParamList } from '../types/navigationTypes'

type ScreenNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList, 'Counter'>,
    CompositeNavigationProp<
        StackNavigationProp<RootStackParamList>,
        DrawerNavigationProp<DrawerParamList>
    >
>

type ScreenRouteProp = RouteProp<DrawerParamList, 'Counter'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const CounterScreen: React.FC<Props> = ({ navigation }) => {
    const count = useSelector((state: RootState) => state.count)
    return (
        <Container>
            <Text variant="subHeader">CounterPage</Text>
            <Box marginTop="m">
                <DisplayCount />
                <CountButton/>
                <Box marginVertical="l">
                    <TouchableHighlight onPress={() => navigation.navigate('Push', { count })}>
                        <Text variant="link">Link to nowhere</Text>
                    </TouchableHighlight>
                </Box>
            </Box>
        </Container>
    )
}
