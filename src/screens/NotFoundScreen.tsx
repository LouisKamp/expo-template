import { Link } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import * as React from 'react'

import { Box } from '../components/atoms/Box'
import { Text } from '../components/atoms/Text'
import { RootStackParamList } from '../types/navigationTypes'

type NotFoundScreenProps = StackScreenProps<RootStackParamList, 'NotFound'>

export const NotFoundScreen: React.FC<NotFoundScreenProps> = () => {
    return (
        <Box flex={1} backgroundColor="mainBackground" alignItems="center" justifyContent="center" padding="l">
            <Text fontSize={20} fontWeight="bold">This screen doesn&apos;t exist.</Text>
            <Box marginTop="l">
                <Link to="/counter">
                    <Text fontWeight="bold" color="action">Go back to home</Text>
                </Link>
            </Box>
        </Box>
    )
}
