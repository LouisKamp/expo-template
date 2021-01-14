import { DrawerScreenProps } from '@react-navigation/drawer'
import { Link } from '@react-navigation/native'
import React from 'react'

import { Container } from '../components/atoms/Container'
import { Text } from '../components/atoms/Text'
import { CountButton } from '../components/molecule/CountButton'
import { DisplayCount } from '../components/molecule/DisplayCount'
import { DrawerParamList } from '../types/navigationTypes'

type CounterScreenProps = DrawerScreenProps<DrawerParamList, 'Counter'>

export const CounterScreen: React.FC<CounterScreenProps> = () => {

    return (
        <Container>
            <Text>CounterPage</Text>
            <DisplayCount />
            <CountButton/>
            <Link to="/nowhere"><Text>Kage</Text></Link>
        </Container>
    )
}
