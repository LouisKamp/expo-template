import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../state'
import { Text } from '../atoms/Text'

type DisplayCountProps = {
    
}

export const DisplayCount: React.FunctionComponent<DisplayCountProps> = () => {
    const count = useSelector((state:RootState) => state.count)
    return (
        <Text>The count is: {count}</Text>
    )
}
