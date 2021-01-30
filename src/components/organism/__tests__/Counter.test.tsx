import { fireEvent, render } from '@testing-library/react-native'
import * as React from 'react'
import { Provider } from 'react-redux'

import { store } from '../../../state'
import { CountButton } from '../../molecule/CountButton'
import { DisplayCount } from '../../molecule/DisplayCount'

describe('Counter', () => {

    it('Can display count', () => {
        const { getByText } = render(
            <Provider store={store}>
                <DisplayCount />
            </Provider>
        )

        expect(getByText(/The count is/).props.children.join('')).toBe('The count is: 0')
    })

    it('Can increase count', () => {
        const { getByText } = render(
            <Provider store={store}>
                <DisplayCount />
                <CountButton />
            </Provider>
        )

        const Button = getByText(/Count/)
        fireEvent(Button, 'onPress')

        expect(getByText(/The count is/).props.children.join('')).toBe('The count is: 2')

    })
})
