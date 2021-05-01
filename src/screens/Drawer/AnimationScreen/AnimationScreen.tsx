import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue, withSpring 
} from 'react-native-reanimated'

import { Container } from '../../../components/atoms/Container'
import { CompositeNavType, DrawerParamList } from '../../../types/navigationTypes'

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

export const AnimationScreen: React.VFC<Props> = () => {
    
    const x = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {startX: number, startY: number}>({
        onStart: (_, ctx) => {
            ctx.startX = x.value
        },
        onActive: (event, ctx) => {
            x.value = ctx.startX + event.translationX
        },
        onEnd: (event, ctx) => {
            x.value = withSpring(ctx.startX + event.translationX + 1, { velocity: event.velocityX })
        },
    })

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: x.value,
                }
            ],
        }
    })

    return (
        <Container>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[{ height: 40, width: 40, backgroundColor: 'blue' }, animatedStyle]} />
            </PanGestureHandler>
        </Container>
    )
}
