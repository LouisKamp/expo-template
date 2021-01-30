import { fireEvent, render } from '@testing-library/react-native'
import * as React from 'react'
import { Provider } from 'react-redux'

import { CountButton } from '../../../components/molecule/CountButton'
import { DisplayCount } from '../../../components/molecule/DisplayCount'
import { store } from '../../../state'

describe('Count', () => {
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
