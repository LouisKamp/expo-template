import { useMutation, useQueryClient } from 'react-query'

import { FormValues } from '../types/FormTypes'
import { QueryTypes } from '../types/QueryTypes'

export const usePostForm = () => {
    const queryClient = useQueryClient()

    return useMutation<FormValues, unknown, FormValues>(async (formValues) => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        return formValues
    }, {
        onSuccess(values) {
            queryClient.setQueryData<FormValues[]>(QueryTypes.FORM, (data) => [...data || [], values])
        }
    })
}
