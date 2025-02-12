import {Typography} from '@/shared'

import s from './GreenText.module.scss'

type Props = {
    text: string
}

export const GreenText = ({text}: Props) => {
    return (
        <Typography as={'span'} variant={'h2'} className={s.greenText}>
            {text}
        </Typography>
    )
}

