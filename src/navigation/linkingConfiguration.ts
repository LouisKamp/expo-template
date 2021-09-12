import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '../types/navigationTypes'

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Counter: 'counter',
                    Form: 'form',
                    Animation: 'animation'
                },
            },
            Push: {
                path: 'push/:count',
                parse: {
                    count: (count: string) => parseInt(count, 10),
                },
            },
            NotFound: '*',
        },
    },
}
