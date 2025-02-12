
import { clsx } from 'clsx'

import s from './Label.module.scss'
import {Typography} from '@/shared'

type Props = {
  error?: string
  id: string
  label?: string
  labelCN?: string
}

export const Label = ({ error, id, label, labelCN }: Props) => {
  return (
    <Typography
      as={'label'}
      className={clsx(s.label, error && s.error, labelCN)}
      htmlFor={id}
      variant={'regular-text-14'}
    >
      {label}
    </Typography>
  )
}
