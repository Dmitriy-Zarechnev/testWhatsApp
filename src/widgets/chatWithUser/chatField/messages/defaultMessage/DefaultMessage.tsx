import {CSSProperties} from 'react'

import {clsx} from 'clsx'
import {NotReadMessage, ReadMessage, Typography} from '@/shared'

import s from './DefaultMessage.module.scss'

type Props = {
    isMine?: boolean
    isRead?: boolean
    message: string
    style?: CSSProperties
}

export const DefaultMessage = ({isMine = false, isRead, message, style}: Props) => {
    const arrowDecider = isRead ? (
        <ReadMessage height={16} width={16}/>
    ) : (
        <NotReadMessage height={16} width={16}/>
    )

    return (
        <div className={clsx(s.wrapper, isMine ? s.blueWrapper : s.greyWrapper)} style={style}>
            <Typography variant={'regular-text-14'}>
                {message}
            </Typography>

            <Typography
                as={'span'}
                className={clsx(s.date, isMine ? s.blueDate : s.greyDate)}
                variant={'small-text'}
            >
                {isMine && arrowDecider}
            </Typography>
        </div>
    )
}
