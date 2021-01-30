import * as React from 'react'

import { CountButton } from '../molecule/CountButton'
import { DisplayCount } from '../molecule/DisplayCount'

export const Counter: React.VFC = () => (
    <>
        <DisplayCount />
        <CountButton/>
    </>
)
