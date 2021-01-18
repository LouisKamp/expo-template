import { DrawerScreenProps } from '@react-navigation/drawer'
import React, { useState } from 'react'
import { Modal } from 'react-native'

import { Box } from '../components/atoms/Box'
import { Container } from '../components/atoms/Container'
import { FormButton } from '../components/atoms/FormButton'
import { Text } from '../components/atoms/Text'
import { AddForm } from '../components/molecule/AddForm'
import { lengths } from '../theme/lengths'
import { DrawerParamList } from '../types/navigationTypes'

type FormScreenProps = DrawerScreenProps<DrawerParamList, 'Form'>

export const FormScreen: React.FC<FormScreenProps> = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <Container>
            <Text variant="subHeader">FormScreen</Text>
            <AddForm />

            <FormButton label="Open modal" onPress={() => setModalVisible(true)} />
            <Modal transparent visible={modalVisible} animationType="fade" onRequestClose={() => setModalVisible(false)}>
                <Box justifyContent="center" alignItems="center" flex={1}>
                    <Box
                        borderWidth={1}
                        borderColor="gray"
                        height={lengths.largeBox}
                        width={lengths.largeBox} 
                        backgroundColor="secondaryBackground"
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
