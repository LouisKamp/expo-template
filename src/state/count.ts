import { createModel } from '@rematch/core'

import { RootModel } from '.'

export const count = createModel<RootModel>()({
    state: 0,
    reducers: {
        increment(state, payload: number) {
            return state + payload
        },
    },
    effects: (dispatch) => ({
        async incrementAsync(payload: number, state) {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            dispatch.count.increment(state.count + payload)
        },
    }),
})
