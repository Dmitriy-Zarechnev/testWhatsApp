import {AddInstancesFormValues, AddInstancesSchema, Button} from '@/shared'
import {ControlledInput} from '@/entities'
import {useForm} from 'react-hook-form'
import {useSelector} from 'react-redux'
import {selectApiTokenInstance, selectIdInstance} from '@/services'
import {zodResolver} from '@hookform/resolvers/zod'

import s from './AddInstancesForm.module.scss'

type Props = {
    onSubmitAddInstancesForm: (data: AddInstancesFormValues, resetForm: () => void) => void
}

export const AddInstancesForm = ({onSubmitAddInstancesForm}: Props) => {
    const idInstance = useSelector(selectIdInstance)
    const apiTokenInstance = useSelector(selectApiTokenInstance)

    const {
        control,
        formState: {isSubmitting, errors},
        handleSubmit,
        reset
    } = useForm<AddInstancesFormValues>({
        defaultValues: {
            idInstance,
            apiTokenInstance
        },
        mode: 'onChange',
        resolver: zodResolver(AddInstancesSchema)
    })

    const submitFormHandler = (data: AddInstancesFormValues) => {
        onSubmitAddInstancesForm(data, reset)
    }

    return (
        <form onSubmit={handleSubmit(submitFormHandler)} className={s.formWrapper}>
            <ControlledInput control={control}
                             label={'idInstance'}
                             name={'idInstance'}
                             placeholder={'Укажите idInstance'}
                             type={'text'}
                             error={errors.idInstance?.message}
                             wrapperCN={s.input}
                             autoComplete={'off'}
            />
            <ControlledInput control={control}
                             label={'apiTokenInstance'}
                             name={'apiTokenInstance'}
                             placeholder={'Укажите apiTokenInstance'}
                             type={'text'}
                             error={errors.apiTokenInstance?.message}
                             wrapperCN={s.input}
                             autoComplete={'off'}
            />
            <Button disabled={isSubmitting}
                    variant={'primary'}
                    type={'submit'}
                    className={s.button}
            >
                Отправить
            </Button>
        </form>
    )
}

