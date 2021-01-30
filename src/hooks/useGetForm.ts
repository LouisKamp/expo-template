import { useQuery } from 'react-query'

import { FormValues } from '../types/FormTypes'
import { QueryTypes } from '../types/QueryTypes'

export const useGetForm = () => {

    return useQuery<FormValues[]>(QueryTypes.FORM, async () => {
        return []
    })
}
