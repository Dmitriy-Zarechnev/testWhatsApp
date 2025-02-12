import {ComponentPropsWithoutRef, Ref, useId} from 'react'

import {clsx} from 'clsx'

import s from './Input.module.scss'

import {ErrorField} from '../errorField/ErrorField'
import {Label} from '../label/Label'

export type InputProps = {
    error?: string
    label?: string
    labelCN?: string
    wrapperCN?: string
    ref?: Ref<HTMLInputElement>
} & ComponentPropsWithoutRef<'input'>

export const Input =
    ({className, error, ref, label, labelCN, wrapperCN, ...rest}: InputProps) => {
        const inputId = useId()

        return (
            <div className={clsx(s.inputWrapper, wrapperCN)}>
                {label && <Label error={error} id={inputId} label={label} labelCN={labelCN}/>}
                <div className={s.inputContainer}>
                    <input
                        className={clsx(
                            s.input,
                            error && s.error,
                            className
                        )}
                        id={inputId}
                        ref={ref}
                        {...rest}
                    />
                </div>
                <ErrorField error={error}/>
            </div>
        )
    }

