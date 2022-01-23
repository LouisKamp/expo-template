import { DrawerNavigationProp } from '@react-navigation/drawer'
import {
    CompositeNavigationProp, Link, RouteProp
} from '@react-navigation/native'
import React from 'react'
import { Platform } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useRecoilState } from 'recoil'

import { Box } from '../../../components/atoms/Box'
import { Container } from '../../../components/atoms/Container'
import { Text } from '../../../components/atoms/Text'
import { Counter } from '../../../components/organism/Counter'
import { countState } from '../../../state/countState'
import { CompositeNavType, DrawerParamList } from '../../../types/navigationTypes'

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

export const CounterScreen: React.VFC<Props> = ({ navigation }) => {
    const [count, setCount] = useRecoilState(countState)
    /* const nav = useNavigation<ScreenNavigationProp>() */

    return (
        <Container>
            <Text variant="subHeader">CounterPage</Text>
            <Box marginTop="m">
                <Counter />
                <Box marginVertical="l">
                    {(Platform.OS !== 'web') ? (
                        <TouchableHighlight onPress={() => navigation.push('Push', { count })}>
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
