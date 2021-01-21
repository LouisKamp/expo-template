import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
    useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring 
} from 'react-native-reanimated'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
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
    
    const x = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {startX: number}>({
        onStart: (_, ctx) => {
            ctx.startX = x.value
        },
        onActive: (event, ctx) => {
            x.value = ctx.startX + event.translationX
        },
        onEnd: (_) => {
            x.value = withSpring(0)
        },
    })
    
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                },
            ],
        }
    })

    const handler = (e:any) => {
        // console.log(e)
    }

    return (
        <Container>
            <Text variant="subHeader">Push Screen</Text>
            <Box marginTop="m">
                <PanGestureHandler minDist={3} onGestureEvent={gestureHandler}>
                    <Animated.View style={[{ height: 20, width: 20, backgroundColor: 'blue' }, animatedStyle]} />
                </PanGestureHandler>
            </Box>
        </Container>
    )
}
