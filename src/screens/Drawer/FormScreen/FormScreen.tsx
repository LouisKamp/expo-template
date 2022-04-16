import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import React from 'react'

import { Container } from '../../../components/atoms/Container'
import { Text } from '../../../components/atoms/Text'
import { AddForm } from '../../../components/organism/AddForm'
import { CompositeNavType, DrawerParamList } from '../../../types/navigationTypes'

type ParamList = DrawerParamList

type ScreenNavigationProp = CompositeNavigationProp<
DrawerNavigationProp<ParamList, 'Form'>,
CompositeNavType
>

type ScreenRouteProp = RouteProp<ParamList, 'Form'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const FormScreen: React.VFC<Props> = () => {
    return (
        <Container>
            <Text variant="subHeader">FormScreen</Text>

            <AddForm />
        </Container>
    )
}
