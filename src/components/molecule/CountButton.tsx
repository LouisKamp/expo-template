import React from 'react'
import { useDispatch } from 'react-redux'

import { Dispatch } from '../../state'
import { Button } from '../atoms/Button'

type CountButtonProps = {
    
}

export const CountButton: React.FunctionComponent<CountButtonProps> = () => {

    const dispatch = useDispatch<Dispatch>()

    const handleOnPress = () => {
        dispatch.count.increment(2)
    }
    return (
        <Button label="Count" onPress={handleOnPress} />
    )
}
