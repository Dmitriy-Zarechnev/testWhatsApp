import {ComponentPropsWithoutRef, ElementType} from 'react'

import {clsx} from 'clsx'

import s from './Button.module.scss'

export type ButtonVariants =
    | 'outlined'
    | 'icon'
    | 'primary'
    | 'secondary'


type Props<T extends ElementType = 'button'> = {
    as?: T
    fullWidth?: boolean
    variant?: ButtonVariants
} & ComponentPropsWithoutRef<T>

export const Button =
    (props: Props<ElementType>) => {
        const {
            as: Component = 'button',
            children,
            className,
            fullWidth,
            variant = 'primary',
            ...rest
        } = props

        return (
            <Component
                className={clsx(
                    s.button,
                    s[variant],
                    fullWidth && s.fullWidth,
                    className
                )}
                {...rest}
            >
                {children}
            </Component>
        )
    }

