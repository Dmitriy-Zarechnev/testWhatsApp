import {ComponentPropsWithoutRef, ElementType} from 'react'

import clsx from 'clsx'

import s from './Typography.module.scss'

export type TypographyVariants =
    | 'bold-text-14'
    | 'bold-text-16'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'regular-text-14'
    | 'regular-text-16'
    | 'small-text'

export type Props<T extends ElementType = 'p'> = {
    as?: T
    variant?: TypographyVariants
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(
    props: Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & Props<T>
) => {
    const {as: Component = 'p', children, className, variant = 'regular-text-14', ...rest} = props

    return (
        <Component {...rest} className={clsx(s[variant], className)}>
            {children}
        </Component>
    )
}
