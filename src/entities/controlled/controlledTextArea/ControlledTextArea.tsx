import {FieldValues, UseControllerProps, useController} from 'react-hook-form'
import {TextArea, TextAreaProps} from '@/shared'

type Props<T extends FieldValues> = Omit<TextAreaProps, 'onChange' | 'value'> &
    UseControllerProps<T>

export const ControlledTextArea = <T extends FieldValues>({
                                                              control,
                                                              defaultValue,
                                                              name,
                                                              rules,
                                                              shouldUnregister,
                                                              ...rest
                                                          }: Props<T>) => {
    const {
        field: {onChange, value, ...field}
    } = useController({
        control,
        defaultValue,
        name,
        rules,
        shouldUnregister
    })

    return <TextArea {...field} {...rest} onChange={onChange} value={value}/>
}
