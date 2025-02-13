import {KeyboardEvent} from 'react'
import {Button, LineLoader, TextArea} from '@/shared'
import {ChangeEvent, useState} from 'react'
import {useResizeTextArea} from './lib/useResizeTextArea'

import {addMessage, selectApiTokenInstance, selectIdInstance, useSendMessageMutation} from '@/services'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'

import {useAppDispatch} from '@/services/store'

import s from './TextAreaField.module.scss'

const MY_PHONE_NUMBER = '79208743215'

export const TextAreaField = () => {
    const [messageField, setMessageField] = useState('')
    const {adjustHeight, textAreaRef} = useResizeTextArea(messageField)
    const {phoneNumber} = useParams()
    const dispatch = useAppDispatch()

    const idInstance = useSelector(selectIdInstance)
    const apiTokenInstance = useSelector(selectApiTokenInstance)

    const [sendMessage, {isLoading: sendMessageIsLoading}] = useSendMessageMutation()


    const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageField(event.target.value)
    }

    const sendMessageHandler = () => {
        if (messageField.trim()) {
            sendMessage({message: messageField, idInstance, apiTokenInstance, phoneNumber: String(phoneNumber)}).unwrap().then(() => {
                    toast.success('Сообщение отправлено!')

                    dispatch(addMessage({message: messageField, phoneNumber: MY_PHONE_NUMBER, id: String(Math.random())}))

                    setMessageField('')
                }
            )
        }
    }

    const clearMessageHandler = () => {
        setMessageField('')
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            sendMessageHandler()
        }
    }

    return (
        <>
            {sendMessageIsLoading && <LineLoader/>}
            <div className={s.wrapper}>
                <TextArea
                    className={s.textArea}
                    onChange={changeMessageHandler}
                    onInput={adjustHeight}
                    onKeyDown={onKeyPressHandler}
                    placeholder={'Введите сообщение'}
                    ref={textAreaRef}
                    value={messageField}
                    wrapperCN={s.textAreaWrapper}
                />
                {messageField && (
                    <Button className={s.sendButton} onClick={sendMessageHandler} variant={'outlined'}>
                        Отправить
                    </Button>
                )}
                {messageField && (
                    <Button className={s.clearMessageButton} onClick={clearMessageHandler} variant={'icon'}>
                        x
                    </Button>
                )}
            </div>
        </>
    )
}

