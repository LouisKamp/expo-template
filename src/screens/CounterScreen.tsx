import { DrawerScreenProps } from '@react-navigation/drawer'
import { Link } from '@react-navigation/native'
import React from 'react'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { Text } from '../components/atoms/Text'
import { CountButton } from '../components/molecule/CountButton'
import { DisplayCount } from '../components/molecule/DisplayCount'
import { DrawerParamList } from '../types/navigationTypes'

type CounterScreenProps = DrawerScreenProps<DrawerParamList, 'Counter'>

export const CounterScreen: React.FC<CounterScreenProps> = () => {

    return (
        <Container>
            <Text variant="subHeader">CounterPage</Text>
            <Box marginTop="m">
                <DisplayCount />
                <CountButton/>
                <Box marginVertical="l">
                    <Link to="/nowhere"><Text variant="link">Link to nowhere</Text></Link>
                </Box>
            </Box>
        </Container>
    )
}
