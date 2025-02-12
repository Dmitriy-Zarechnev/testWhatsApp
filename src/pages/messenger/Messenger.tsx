import {AddPhoneNumberFormValues, GreenText, PATH, Typography} from '@/shared'
import {AddPhoneNumberForm} from '@/entities'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

import s from './Messenger.module.scss'

export const Messenger = () => {
    const navigate = useNavigate()

    const submitAddPhoneNumberHandler = (
        data: AddPhoneNumberFormValues,
        resetForm: () => void
    ) => {
        toast.info(`Вы начинаете общение с пользователем - ${data.phoneNumber}!`)
        resetForm()

        navigate(`${PATH.MESSENGER}/${data.phoneNumber}`)
    }

    return (
        <>
            <Typography variant={'h2'} className={s.text}>
                Введите номер пользователя <GreenText text={'WhatsApp'}/>{' '}
                и начните общаться прямо сейчас
            </Typography>
            <AddPhoneNumberForm onSubmitAddPhoneNumberForm={submitAddPhoneNumberHandler}/>
        </>
    )
}

