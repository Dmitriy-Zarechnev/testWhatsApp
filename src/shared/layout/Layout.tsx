import {Outlet} from 'react-router-dom'

import s from './Layout.module.scss'

export const Layout = () => {
    return (
        <main className={s.main}>
            <Outlet/>
        </main>
    )
}
