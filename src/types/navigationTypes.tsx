import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
    Root: NavigatorScreenParams<DrawerParamList>
    NotFound: undefined
    Push: {count: number}
};

export type DrawerParamList = {
    Counter: undefined
    Form: undefined
}
