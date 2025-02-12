import {ChatField, TextAreaField, UserHeader} from '@/widgets'

import {useState} from 'react'
import {INITIAL_TEXT_FIELD_HEIGHT} from '@/shared'

import s from './MessengerWithUser.module.scss'

export const MessengerWithUser = () => {
    const [textAreaHeight, setTextAreaHeight] = useState(INITIAL_TEXT_FIELD_HEIGHT)

    const changeTextAreaHeightHandler = (height: number) => {
        setTextAreaHeight(height)

        console.log(textAreaHeight)
    }

    return (
        <>
            {/*{getPublicUserProfileIsLoading && <LineLoader />}*/}
            <div className={s.wrapper}>
                <UserHeader/>
                <ChatField/>
                <TextAreaField onHeightChange={changeTextAreaHeightHandler}/>
            </div>
        </>
    )
}

