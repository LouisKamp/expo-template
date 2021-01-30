import * as Linking from 'expo-linking'

export const linkingConfiguration = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    Counter: 'counter',
                    Form: 'form',
                    /* Animation: 'animation' */
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
