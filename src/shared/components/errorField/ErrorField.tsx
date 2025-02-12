import s from './ErrorField.module.scss'
import {Typography} from '@/shared'

type Props = {
    error?: string
}

export const ErrorField = ({error}: Props) => {
    return (
        <Typography className={s.errorText} variant={'small-text'}>
            {error}
        </Typography>
    )
}
