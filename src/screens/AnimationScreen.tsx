import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { FormButton } from '../components/atoms/FormButton'
import { Text } from '../components/atoms/Text'
import { CompositeNavType, DrawerParamList } from '../types/navigationTypes'

type ParamList = DrawerParamList

type ScreenNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<ParamList, 'Animation'>,
    CompositeNavType
>

type ScreenRouteProp = RouteProp<ParamList, 'Animation'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const AnimationScreen: React.FC<Props> = ({ route }) => {

    // https://docs.swmansion.com/react-native-reanimated/
    
    const offset = useSharedValue(0)

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value * 255 }],
        }
    })

    const handlePress = () => {
        offset.value = withSpring(Math.random())
    }

    return (
        <Container>
            <Text variant="subHeader">Push Screen</Text>
            <Box marginTop="m">
                <Animated.View style={[{ height: 20, width: 20, backgroundColor: 'blue' }, animatedStyles]} />
                <FormButton onPress={handlePress} label="Move" />
            </Box>
        </Container>
    )
}
