import {KeyboardEvent} from 'react'

import {Button, TextArea} from '@/shared'

import {ChangeEvent, useState} from 'react'
import {useResizeTextArea} from './lib/useResizeTextArea'

import s from './TextAreaField.module.scss'

type Props = {
    onHeightChange: (height: number) => void
}

export const TextAreaField = ({onHeightChange}: Props) => {
    const [messageField, setMessageField] = useState('')
    const {adjustHeight, textAreaRef} = useResizeTextArea(messageField, onHeightChange)


    const changeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessageField(event.target.value)
    }

    const sendMessageHandler = () => {
        if (messageField.trim()) {
            // todo: отправим сообщение отсюда

            setMessageField('')
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
    )
}

