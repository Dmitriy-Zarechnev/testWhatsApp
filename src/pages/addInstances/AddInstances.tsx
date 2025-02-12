import {AddInstancesForm} from '@/entities'
import {useNavigate} from 'react-router-dom'
import {AddInstancesFormValues, GreenText, PATH, Typography} from '@/shared'
import {toast} from 'react-toastify'
import {useAppDispatch} from '@/services/store'
import {setInstanceInfo} from '@/services'

import s from './AddInstances.module.scss'

export const AddInstances = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const submitAddInstancesFormHandler = (
        data: AddInstancesFormValues,
        resetForm: () => void
    ) => {
        dispatch(setInstanceInfo({idInstance: data.idInstance, apiTokenInstance: data.apiTokenInstance}))

        toast.success('Instances успешно добавлены!')
        navigate(PATH.MESSENGER, {replace: true})
        resetForm()
    }
    return (
        <>
            <Typography variant={'h2'} className={s.text}>
                Вводите свои учетные данные из системы{' '}
                <GreenText text={'GREEN-API'}/>
            </Typography>
            <AddInstancesForm onSubmitAddInstancesForm={submitAddInstancesFormHandler}/>
        </>
    )
}

