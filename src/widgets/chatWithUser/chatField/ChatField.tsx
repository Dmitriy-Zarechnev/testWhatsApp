import {MyMessage} from './messages/myMessage/MyMessage'
import {FriendMessage} from './messages/friendMessage/FriendMessage'

import {useSelector} from 'react-redux'
import {addMessage, MessagesState, selectAllMessages, selectApiTokenInstance, selectIdInstance, useDeleteNotificationMutation, useLazyGetMessagesQuery} from '@/services'

import {toast} from 'react-toastify'
import {useCallback, useEffect, useId} from 'react'
import {useAppDispatch} from '@/services/store'

import s from './ChatField.module.scss'

const MY_PHONE_NUMBER = '79208743215'

const TIME_OUT = 60

export const ChatField = () => {
    const newMessageId = useId()
    const dispatch = useAppDispatch()
    const messagesState = useSelector(selectAllMessages)
    const [lazyGetMessages, {data}] = useLazyGetMessagesQuery()
    const [deleteNotification] = useDeleteNotificationMutation()
    const idInstance = useSelector(selectIdInstance)
    const apiTokenInstance = useSelector(selectApiTokenInstance)


    const renderMessage = (message: MessagesState) => {
        if (message.phoneNumber === MY_PHONE_NUMBER) {
            return <MyMessage key={message.id} message={message.message}/>
        } else {
            return <FriendMessage key={message.id} message={message.message}/>
        }
    }

    const fetchMessages = useCallback(() => {
        lazyGetMessages({apiTokenInstance, idInstance, receiveTimeout: TIME_OUT})
            .unwrap()
            .then((response) => {
                if (response && response.body) {


                    toast.success('Новое сообщение получено!')

                    dispatch(addMessage({
                        message: response.body.idMessage,
                        phoneNumber: response.body.chatId.split('@')[0],
                        id: newMessageId
                    }))

                }
            })
    }, [lazyGetMessages, dispatch, deleteNotification, apiTokenInstance, idInstance])

    useEffect(() => {
        fetchMessages()

    }, [data])
    return (
        <div className={s.wrapper}>
            {messagesState.map(renderMessage)}
        </div>
    )
}

