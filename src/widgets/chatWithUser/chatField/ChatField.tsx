import {MyMessage} from './messages/myMessage/MyMessage'
import {FriendMessage} from './messages/friendMessage/FriendMessage'

import s from './ChatField.module.scss'

export const ChatField = () => {


    return (
        <div className={s.wrapper}>
            <MyMessage message={'My message'}/>
            <FriendMessage message={'Friend message'}/>
        </div>
    )
}

