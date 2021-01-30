import { render, waitFor } from '@testing-library/react-native'
import * as React from 'react'

import App from './App'

describe('App', () => {
    it('The app renders', async () => {
        const element = await waitFor(() => render(<App />))
        expect(element.toJSON()?.children?.length).toBe(1)
    })
})
