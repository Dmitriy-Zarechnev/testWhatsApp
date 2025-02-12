import {FieldValues, UseControllerProps, useController} from 'react-hook-form'
import {Input, InputProps} from '@/shared'


type Props<T extends FieldValues> = Omit<InputProps, 'onChange' | 'value'> & UseControllerProps<T>

export const ControlledInput = <T extends FieldValues>({
                                                           control,
                                                           defaultValue,
                                                           name,
                                                           rules,
                                                           shouldUnregister,
                                                           type,
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

    // const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     const inputValue = e.target.value
    //     onChange(inputValue)
    // }

    return <Input {...field} {...rest} onChange={onChange} type={type} value={value}/>
}
