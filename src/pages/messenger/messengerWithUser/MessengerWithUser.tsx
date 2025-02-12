import {ChatField, TextAreaField, UserHeader} from '@/widgets'

import s from './MessengerWithUser.module.scss'

export const MessengerWithUser = () => {

    return (
        <div className={s.wrapper}>
            <UserHeader/>
            <ChatField/>
            <TextAreaField/>
        </div>
    )

}

