import React from 'react'
import { useSetRecoilState } from 'recoil'

import { countState } from '../../state/countState'
import { Button } from '../atoms/Button'

type CountButtonProps = unknown

export const CountButton: React.VFC<CountButtonProps> = () => {
    const setCount = useSetRecoilState(countState)
    const handleOnPress = () => {
        setCount((c) => c + 2)
    }

    return (
        <Button label="Press me" onPress={handleOnPress} />
    )
}
