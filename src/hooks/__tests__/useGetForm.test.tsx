import { renderHook } from '@testing-library/react-hooks'

import { QueryProvider } from '../../components/providers/QueryProvider'
import { useGetForm } from '../useGetForm'

describe('getForm', () => {

    it('returns', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useGetForm(), { wrapper: QueryProvider })
        
        await waitForNextUpdate()

        expect(result.current.data?.length).toBe(0)
    })

})
