import {ComponentPropsWithoutRef, Ref, useId} from 'react'

import clsx from 'clsx'

import s from './TextArea.module.scss'

import {ErrorField} from '../errorField/ErrorField'
import {Label} from '../label/Label'

export type TextAreaProps = {
    error?: string
    label?: string
    labelCN?: string
    wrapperCN?: string
    ref?: Ref<HTMLTextAreaElement>
} & ComponentPropsWithoutRef<'textarea'>

export const TextArea =
    ({className, error, label, labelCN, ref, wrapperCN, ...rest}: TextAreaProps) => {
        const textAreaId = useId()

        return (
            <div className={clsx(s.wrapper, wrapperCN)}>
                {label && <Label error={error} id={textAreaId} label={label} labelCN={labelCN}/>}
                <textarea
                    className={clsx(s.textArea, error && s.error, className)}
                    id={textAreaId}
                    ref={ref}
                    {...rest}
                />
                <ErrorField error={error}/>
            </div>
        )
    }

