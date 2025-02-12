import {ControlledInput} from '@/entities'
import {AddPhoneNumberFormValues, AddPhoneNumberSchema, Button} from '@/shared'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

import s from './AddPhoneNumberForm.module.scss'

type Props = {
    onSubmitAddPhoneNumberForm: (data: AddPhoneNumberFormValues, resetForm: () => void) => void
}

export const AddPhoneNumberForm = ({onSubmitAddPhoneNumberForm}: Props) => {

    const {
        control,
        formState: {isSubmitting, errors},
        handleSubmit,
        reset
    } = useForm<AddPhoneNumberFormValues>({
        defaultValues: {
            phoneNumber: ''
        },
        mode: 'onChange',
        resolver: zodResolver(AddPhoneNumberSchema)
    })

    const submitFormHandler = (data: AddPhoneNumberFormValues) => {
        onSubmitAddPhoneNumberForm(data, reset)

    }

    return (
        <form onSubmit={handleSubmit(submitFormHandler)} className={s.formWrapper}>
            <ControlledInput control={control}
                             label={'Номер телефона пользователя'}
                             name={'phoneNumber'}
                             placeholder={'Укажите номер телефона пользователя'}
                             type={'text'}
                             error={errors.phoneNumber?.message}
                             wrapperCN={s.input}
                             autoComplete={'off'}
            />
            <Button disabled={isSubmitting}
                    variant={'primary'}
                    type={'submit'}
                    className={s.button}
            >
                Начать диалог
            </Button>
        </form>
    )
}

