import {Link, Outlet} from 'react-router-dom'

import {Button, PATH} from '@/shared'
import {AddNewChatIcon} from '@/shared/assets/icons'

import s from './Layout.module.scss'

export const Layout = () => {
    return (
        <main className={s.main}>
            <Button variant={'icon'} as={Link} to={PATH.MESSENGER} className={s.iconButton} title={'На главную'}>
                <AddNewChatIcon className={s.addChatIcon}/>
            </Button>
            <Outlet/>
        </main>
    )
}
