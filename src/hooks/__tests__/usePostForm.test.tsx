import { renderHook } from '@testing-library/react-hooks'

import { QueryProvider } from '../../components/providers/QueryProvider'
import { useGetForm } from '../useGetForm'
import { usePostForm } from '../usePostForm'

describe('postForm', () => {
    const data = { firstName: 'hej', lastName: 'dig' }

    it('posts', async () => {
        const { result, waitForValueToChange } = renderHook(() => usePostForm(), { wrapper: QueryProvider })
        result.current.mutate(data)
        await waitForValueToChange(() => result.current.isSuccess)

        expect(result.current.data).toBe(data)
    })

    it('updates cache', async () => {
        const { result, waitForValueToChange } = renderHook(() => usePostForm(), { wrapper: QueryProvider })
        const { result: getFormRes } = renderHook(() => useGetForm(), { wrapper: QueryProvider })

        result.current.mutate(data)
        await waitForValueToChange(() => result.current.isSuccess)

        const newData = getFormRes.current.data || []

        expect(newData[0]).toBe(data)
    })

})
