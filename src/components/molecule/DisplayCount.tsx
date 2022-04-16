import React from 'react'
import { useRecoilValue } from 'recoil'

import { countState } from '../../state/countState'
import { Text } from '../atoms/Text'

type DisplayCountProps = unknown

export const DisplayCount: React.VFC<DisplayCountProps> = () => {
    const count = useRecoilValue(countState)
    return (
        <Text>
            {`The count is: ${count}`}
        </Text>
    )
}
