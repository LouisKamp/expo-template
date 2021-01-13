import * as Linking from 'expo-linking'

export const linkingConfiguration = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Counter: 'counter'
                },
            },
            NotFound: '*',
        },
    },
}
