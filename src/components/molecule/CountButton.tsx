import React from 'react'
import { useRecoilState } from 'recoil'

import { countState } from '../../state/countState'
import { Button } from '../atoms/Button'

type CountButtonProps = {

}

export const CountButton: React.FunctionComponent<CountButtonProps> = () => {
    const [count, setCount] = useRecoilState(countState)
    const handleOnPress = () => {
        setCount((c) => c + 2)
    }

    return (
        <Button label="Press me" onPress={handleOnPress} />
    )
}
