import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { FormButton } from '../components/atoms/FormButton'
import { Text } from '../components/atoms/Text'
import { AddForm } from '../components/molecule/AddForm'
import { lengths } from '../theme/lengths'
import { DrawerParamList, RootStackParamList } from '../types/navigationTypes'

type ScreenNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList, 'Form'>,
    CompositeNavigationProp<
        StackNavigationProp<RootStackParamList>,
        DrawerNavigationProp<DrawerParamList>
    >
>

type ScreenRouteProp = RouteProp<DrawerParamList, 'Form'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

export const FormScreen: React.FC<Props> = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <Container>
            <Text variant="subHeader">FormScreen</Text>
            <AddForm />

            <FormButton label="Open modal" onPress={() => setModalVisible(true)} />
            <Modal transparent visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
                <Box justifyContent="center" alignItems="center" flex={1}>
                    <Box
                        height={lengths.largeBox}
                        width={lengths.largeBox} 
                        backgroundColor="secondaryBackground"
                        borderRadius={lengths.border}
                        shadowColor="shadow"
                        shadowOffset={{
                            width: 0,
                            height: 1
                        }}
                        shadowRadius={2}
                        shadowOpacity={0.1}
                        padding="m">
                        <Text variant="subHeader">Modal</Text>
                        <Box flex={1} />
                        <FormButton variant="expand" label="close" onPress={() => setModalVisible(false)} />
                    </Box>
                </Box>
            </Modal>
        </Container>
    )
}
