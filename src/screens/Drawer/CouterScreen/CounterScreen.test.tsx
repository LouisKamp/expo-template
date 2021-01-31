import {
    act, fireEvent, render, waitFor 
} from '@testing-library/react-native'
import * as React from 'react'

import { TestProviders } from '../../../components/providers'
import { CounterScreen } from './CounterScreen'

describe('CounterScreen', () => {
    it('renders', async () => {
        const push = jest.fn()

        const props: any = {
            navigation: {
                push
            }
        }
        const element = await waitFor(() => render(
            <TestProviders>
                <CounterScreen {...props} />
            </TestProviders>
        ))
        expect(element.toJSON()?.children?.length).toBe(1)
    })

    it('pushes', async () => {
        const push = jest.fn()

        const props: any = {
            navigation: {
                push
            }
        }
        const { getByText } = render(
            <TestProviders>
                <CounterScreen {...props} />
            </TestProviders>
        )

        const link = await getByText('Link to nowhere')

        if (link) {
            act(() => {
                fireEvent(link, 'onPress')
            }) 
        }

        expect(props.navigation.push).toBeCalledWith('Push', { count: 10 })
        
    })
})
