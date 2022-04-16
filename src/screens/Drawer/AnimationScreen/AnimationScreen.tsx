import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'
import { Dimensions } from 'react-native'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue, withDecay 
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
    const y = useSharedValue(0)

    const vX = useSharedValue(0)
    const vY = useSharedValue(0)

    const { height, width } = Dimensions.get('screen')

    const gestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {startX: number; startY: number}>({
        onStart: (_, ctx) => {
            ctx.startX = x.value
            ctx.startY = y.value
        },
        onActive: (event, ctx) => {

            const newX = ctx.startX + event.translationX
            const newY = ctx.startY + event.translationY
            vX.value = event.velocityX
            vY.value = event.velocityY

            x.value = newX
            y.value = newY
        },
        onEnd: (event, ctx) => {
            x.value = withDecay({ velocity: vX.value })
            y.value = withDecay({ velocity: vY.value })
        },
    })

    useAnimatedReaction(
        () => {
            return x.value
        },
        (data) => { 
            if (data <= 0 || width - 40 - 24 * 2 <= data) {
                vX.value *= -0.5
                x.value = withDecay({ velocity: vX.value })
            }
        }
    )

    useAnimatedReaction(
        () => {
            return y.value
        },
        (data) => { 
            if (data <= 0 || height - 40 - 24 * 2 <= data) {
                vY.value *= -0.5
                y.value = withDecay({ velocity: vY.value })
            }
        }
    )

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: y.value,
                }, {
                    translateX: x.value
                }
            ],
        }
    })

    return (
        <Container>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[{
                    height: 40, width: 40, backgroundColor: 'blue'
                }, animatedStyle]}
                />
            </PanGestureHandler>
        </Container>
    )
}
