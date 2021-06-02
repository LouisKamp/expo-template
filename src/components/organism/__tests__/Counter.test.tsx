import { fireEvent, render } from '@testing-library/react-native'
import * as React from 'react'
import { RecoilRoot } from 'recoil'

import { CountButton } from '../../molecule/CountButton'
import { DisplayCount } from '../../molecule/DisplayCount'

describe('Counter', () => {

    it('Can display count', () => {
        const { getByText } = render(
            <RecoilRoot>
                <DisplayCount />
            </RecoilRoot>
        )

        expect(getByText(/The count is/).props.children.join('')).toBe('The count is: 0')
    })

    it('Can increase count', () => {
        const { getByText } = render(
            <RecoilRoot>
                <DisplayCount />
                <CountButton />
            </RecoilRoot>
        )

        const Button = getByText(/Count/)
        fireEvent(Button, 'onPress')

        expect(getByText(/The count is/).props.children.join('')).toBe('The count is: 2')

    })
})
