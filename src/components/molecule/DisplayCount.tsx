import React from 'react'
import { useRecoilState } from 'recoil'

import { countState } from '../../state/countState'
import { Text } from '../atoms/Text'

type DisplayCountProps = {
    
}

export const DisplayCount: React.FunctionComponent<DisplayCountProps> = () => {
    const [count, setCount] = useRecoilState(countState)
    return (
        <Text>The count is: {count}</Text>
    )
}
