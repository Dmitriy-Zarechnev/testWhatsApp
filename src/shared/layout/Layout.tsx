import {Outlet, useNavigate} from 'react-router-dom'

import {AddNewPhoneIcon, ButtonIconLink, PATH} from '@/shared'
import {AddNewChatIcon} from '@/shared/assets/icons'

import {useSelector} from 'react-redux'
import {selectApiTokenInstance, selectIdInstance} from '@/services'
import {useEffect} from 'react'

import s from './Layout.module.scss'

export const Layout = () => {
    const navigate = useNavigate()
    const idInstance = useSelector(selectIdInstance)
    const apiTokenInstance = useSelector(selectApiTokenInstance)


    useEffect(() => {
        if (!idInstance || !apiTokenInstance) {
            navigate(PATH.ADD_INSTANCES, {replace: true})
        }
    }, [idInstance, apiTokenInstance, navigate])

    return (
        <main className={s.main}>
            <div className={s.buttonsWrapper}>
                <ButtonIconLink to={PATH.ADD_INSTANCES}
                                title={'На главную'}
                                children={<AddNewChatIcon className={s.addChatIcon}/>}
                />
                <ButtonIconLink to={PATH.MESSENGER}
                                title={'Ввести номер'}
                                children={<AddNewPhoneIcon className={s.addChatIcon}/>}
                />
            </div>
            <Outlet/>
        </main>
    )
}
