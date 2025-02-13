import {MyMessage} from './messages/myMessage/MyMessage'
import {FriendMessage} from './messages/friendMessage/FriendMessage'

import {useSelector} from 'react-redux'
import {addMessage, MessagesState, selectAllMessages, selectApiTokenInstance, selectIdInstance, useDeleteNotificationMutation, useLazyGetMessagesQuery} from '@/services'

import {toast} from 'react-toastify'
import {useCallback, useEffect, useRef} from 'react'
import {useAppDispatch} from '@/services/store'

import {useParams} from 'react-router-dom'

import s from './ChatField.module.scss'

const MY_PHONE_NUMBER = '79998002525' // Ваш номер телефона
const TIME_OUT = 10
const POLLING_INTERVAL = 10000

export const ChatField = () => {
    const {phoneNumber} = useParams()
    const dispatch = useAppDispatch()
    const messagesState = useSelector(selectAllMessages)
    const [lazyGetMessages, {data}] = useLazyGetMessagesQuery()

    const [deleteNotification] = useDeleteNotificationMutation()
    const idInstance = useSelector(selectIdInstance)
    const apiTokenInstance = useSelector(selectApiTokenInstance)
    const lastMessageIdRef = useRef<string | null>(null)

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
                    const newMessageId = response.body.idMessage

                    if (newMessageId !== lastMessageIdRef.current) {
                        lastMessageIdRef.current = newMessageId

                        toast.success('Новое сообщение получено!')

                        dispatch(addMessage({
                            message: response.body.idMessage,
                            phoneNumber: String(phoneNumber),
                            id: response.body.idMessage
                        }))

                        deleteNotification({apiTokenInstance, idInstance, receiptId: response.receiptId})
                    }
                }
            })

    }, [lazyGetMessages, dispatch, deleteNotification, apiTokenInstance, idInstance])

    useEffect(() => {
        fetchMessages()
        const intervalId = setInterval(fetchMessages, POLLING_INTERVAL)

        return () => clearInterval(intervalId)

    }, [data])

    return (
        <div className={s.wrapper}>
            {messagesState.map(renderMessage)}
        </div>
    )
}

