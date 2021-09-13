import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
    Root: NavigatorScreenParams<DrawerParamList>
    NotFound: undefined
    Push: {count: number}
};

export type DrawerParamList = {
    Counter: undefined
    Form: undefined
    Animation: undefined
}

export type CompositeNavType = CompositeNavigationProp<
        NativeStackNavigationProp<RootStackParamList>,
        DrawerNavigationProp<DrawerParamList>
    >
