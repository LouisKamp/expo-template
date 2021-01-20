import { DrawerNavigationProp } from '@react-navigation/drawer'
import {
    CompositeNavigationProp, Link, RouteProp, useNavigation 
} from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { Text } from '../components/atoms/Text'
import { CountButton } from '../components/molecule/CountButton'
import { DisplayCount } from '../components/molecule/DisplayCount'
import { RootState } from '../state'
import { CompositeNavType, DrawerParamList } from '../types/navigationTypes'

type ParamList = DrawerParamList

type ScreenNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<ParamList, 'Counter'>,
    CompositeNavType
>

type ScreenRouteProp = RouteProp<ParamList, 'Counter'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const CounterScreen: React.FC<Props> = ({ navigation }) => {
    const count = useSelector((state: RootState) => state.count)
    const nav = useNavigation<ScreenNavigationProp>()
    return (
        <Container>
            <Text variant="subHeader">CounterPage</Text>
            <Box marginTop="m">
                <DisplayCount />
                <CountButton/>
                <Box marginVertical="l">
                    {(Platform.OS !== 'web') ? (
                        <TouchableHighlight onPress={() => nav.push('Push', { count: 10 })}>
                            <Text variant="link">Link to nowhere</Text>
                        </TouchableHighlight>
                    ) : (
                        <>
                            <Link to={`/push/${count}`}>
                                <Text variant="link">Link to push</Text>
                            </Link>
                            <Link to="/nowhere">
                                <Text variant="link">Link to nowhere</Text>
                            </Link>
                        </>
                    )}
                </Box>
            </Box>
        </Container>
    )
}
