import {Link} from 'react-router-dom'
import {Button} from '@/shared'

import {ReactNode} from 'react'

import s from './ButtonIconLink.module.scss'

type Props = {
    to: string
    title: string
    children: ReactNode
}

export const ButtonIconLink = ({children, to, title}: Props) => {
    return (
        <Button variant={'icon'} as={Link} to={to} className={s.iconButton} title={title}>
            {children}
        </Button>
    )
}

